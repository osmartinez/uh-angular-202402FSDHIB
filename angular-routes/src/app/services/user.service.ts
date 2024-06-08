import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getById(id: number){
    return this.http.get(`${this.url}/${id}`)
  }
}
