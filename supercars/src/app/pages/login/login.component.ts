import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../interfaces/login-response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form!: FormGroup

  constructor(private builder: FormBuilder,
    private authService: AuthService){
    this.form = builder.group({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required])
    })
  }

  login(){
    const email: string = this.form.value.email 
    const pass: string = this.form.value.password
    
    this.authService.login(email, pass).subscribe({
      next: (response)=>{
        const loginResponse: LoginResponse = response as LoginResponse
        console.log(loginResponse)
      },
      error: ()=>{
        
      }
    })
  }
}
