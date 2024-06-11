import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiPipePipe } from './pipes/mi-pipe.pipe';
import { DivisaPipe } from './pipes/divisa.pipe';
import { MinusculasPipe } from './pipes/minusculas.pipe';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { FiltroNumerosPipe } from './pipes/filtro-numeros.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FiltroNumerosPipe, MiPipePipe,DivisaPipe,MinusculasPipe, MayusculasPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pipes';
  valor: number = 0
  precio: number = 5
}
