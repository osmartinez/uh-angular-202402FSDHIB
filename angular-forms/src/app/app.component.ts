import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { validadorPassword } from './validators/login-validators'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formulario = this.formBuilder.group({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [validadorPassword]),
      cantidad: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(999),
      ]),
    });

  }

  enviarFormulario() {
    console.log('enviando formulario...');

    // POST A LA API
    console.log(this.formulario.value)
  }
}
