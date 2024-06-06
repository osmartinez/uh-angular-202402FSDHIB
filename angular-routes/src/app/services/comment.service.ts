import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url: string = "https://jsonplaceholder.typicode.com/comments"
  constructor(private http: HttpClient) { }

  getByPostId(id:number){
    return this.http.get(`${this.url}?postId=${id}`)
  }
}
