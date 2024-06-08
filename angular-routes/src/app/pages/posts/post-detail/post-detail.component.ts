import { Component } from '@angular/core';
import { Post } from '../../../interfaces/post';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';
import { CommentService } from '../../../services/comment.service';
import { PostComment } from '../../../interfaces/post-comment';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent {
  post: Post | null = null;
  user: User | null = null;
  comments: PostComment[] = []
  loadingComments: boolean = false
  error: boolean = false;
  parametro: string | null = 'nada';

  constructor(
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((params) => {
      this.parametro = params.get('id');
    });

    // proteccion para evitar tirar peticiones si el parametro ni siquiera es un número
    if (isNaN(Number(this.parametro))) {
      this.error = true;
    } else {
      postService.getById(Number(this.parametro)).subscribe({

        next: (response) => {
          // he obtenido el post, lo guardo en la variable
          this.post = response as Post;

          // obtenemos el usuario
          userService.getById(this.post.userId).subscribe({

            next: (response2) => {
              // he obtenido el usuario, lo guardo en la variable
              this.user = response2 as User;
            },

            error: () => {},
          });
          // fin obtener el usuario

          this.loadingComments = true
          // paralelamente obtenemos los comentarios del post
          commentService.getByPostId(this.post.id).subscribe({
            next: (response)=>{
              // he obtenido los comentario, los guardo en la variable
              this.comments = response as PostComment[]
              this.loadingComments = false
            },
            error: ()=>{
              this.loadingComments = false
            }
          })
          // fin obtener comentarios

        },
        error: () => {
          this.error = true;
        },
      });

     
    }
  }
}
