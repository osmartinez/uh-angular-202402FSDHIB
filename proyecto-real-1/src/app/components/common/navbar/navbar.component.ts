import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private authService: AuthService,
    private router: Router){}

  
  public get isAuth() : boolean {
    if(this.authService.user===null){
      return false
    } 
    else{
      return true
    }
  }
  

  logout(){
    this.authService.logout()
    // te redirijo a /login
    this.router.navigateByUrl("/login")
  }
}
