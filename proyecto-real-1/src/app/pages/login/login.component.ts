import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../interfaces/login-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form!: FormGroup

  constructor(builder: FormBuilder,
     private authService: AuthService,
     private router: Router){
    this.form = builder.group({
      "user": new FormControl(null, [Validators.required]),
      "pass": new FormControl(null, [Validators.required])
    })
  }

  login(){
    // enviar a traves del servicio los datos a la API con metodo HTTP POST
    this.authService.login(this.form.value.user, this.form.value.pass).subscribe({
      next: (response)=>{   
        this.authService.saveUser(response as LoginResponse)
        // navegar a login
        this.router.navigateByUrl("/private-area")
      },
      error: ()=>{}
    })
  }

}
