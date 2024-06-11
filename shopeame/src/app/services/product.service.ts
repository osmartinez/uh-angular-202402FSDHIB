import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products"
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
  }

  getById(id: number){
    return this.http.get(`${this.url}/${id}`)
  }
  
}
