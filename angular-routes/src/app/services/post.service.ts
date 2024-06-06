import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
  }

  getById(id: number){
    return this.http.get(`${this.url}/${id}`)
  }

  getCommentsById(id: number){
    return this.http.get(`${this.url}/${id}/comments`)
  }

  create(post: Post){
    return this.http.post(this.url, post)
  }

// update o modify
  modify(post: Post){
    return this.http.put(`${this.url}/${post.id}`, post)
  }

  partialModify(post: Post){
    return this.http.patch(`${this.url}/${post.id}`, post)
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

}
