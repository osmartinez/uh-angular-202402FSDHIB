import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-task.component.html',
  styleUrl: './input-task.component.css'
})
export class InputTaskComponent {
  texto:string = ""
  @Output() onEnviarTarea = new EventEmitter<string>()

  enviarTarea(){
    console.log('tarea enviada...')
    this.onEnviarTarea.emit(this.texto)
  }
}
