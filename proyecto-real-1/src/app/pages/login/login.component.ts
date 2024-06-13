import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form!: FormGroup

  constructor(builder: FormBuilder){
    this.form = builder.group({
      "email": new FormControl(null, [Validators.required,Validators.email]),
      "pass": new FormControl(null, [Validators.required])
    })
  }

  login(){
    console.log(this.form.value.email)
    console.log(this.form.value.pass)
    // enviar a traves del servicio los datos a la API con metodo HTTP POST
  }

}
