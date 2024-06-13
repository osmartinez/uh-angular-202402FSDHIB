import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../interfaces/login-response';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: LoginResponse|null = null
  url: string = "https://dummyjson.com/auth"

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

  login(uname: string, pass: string){
    return this.http.post(this.url+"/login", {username: uname, password: pass})
  }

  saveUser(user: LoginResponse){
    this.user = user
    this.cookieService.set('user',JSON.stringify(user))
  }

  logout(){
    this.user = null
    this.cookieService.delete("user")
  }
}
