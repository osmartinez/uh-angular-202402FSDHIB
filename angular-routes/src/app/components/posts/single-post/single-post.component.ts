import { Component, Input } from '@angular/core';
import { Post } from '../../../interfaces/post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {
  @Input() post!: Post
}
