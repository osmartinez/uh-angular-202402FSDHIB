import { Component } from '@angular/core';
import { Post } from '../../../interfaces/post';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  post: Post|null= null
  parametro: string|null = "nada"

  constructor(private postService: PostService, private route: ActivatedRoute){
    route.paramMap.subscribe(params=> {
      this.parametro = params.get('id')
    })
    postService.getById(Number(this.parametro)).subscribe({
      next: (response)=>{
        this.post = response as Post
      },
      error: ()=>{

      }
    })
  }

}
