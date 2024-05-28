import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent, HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nombre: string = "oscar";
  title: string = 'primer-proyecto';
  esNuevo: boolean = true;
  numeros: number[] = [1,2,3];
  letras: string[] = ["a","b","c",this.title];
  subtitle: string = "a"
  numero: number = 0

  mivariable: string|number|boolean = true

  test(letra: string, numero: number){
    
  }

  funcion1(){
    this.test(this.subtitle,2)
  }

  sumar(){
    this.numero = this.numero +1
  }

  restar(){
    this.numero = this.numero -1
  }

}
