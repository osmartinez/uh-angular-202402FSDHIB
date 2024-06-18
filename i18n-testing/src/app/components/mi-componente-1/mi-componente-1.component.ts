import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente-1',
  standalone: true,
  imports: [],
  templateUrl: './mi-componente-1.component.html',
  styleUrl: './mi-componente-1.component.css'
})
export class MiComponente1Component {
  cambiarEstado() {
    this.estado = (this.estado==="apagado")?"encendido":"apagado"
  }
  estado: string = "apagado"
}
