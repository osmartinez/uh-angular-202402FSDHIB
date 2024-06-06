import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { SinglePostComponent } from '../../components/posts/single-post/single-post.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SinglePostComponent,RouterOutlet],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posts: Post[] = []

  constructor(private postService: PostService){
    postService.getAll().subscribe({
      next: (response)=>{
        this.posts = response as Post[]
        
      },
      error: ()=>{
        
      }
    })

    
  }


}
