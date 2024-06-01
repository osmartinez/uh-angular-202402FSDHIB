import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() item!: Task
  @Output() onEliminarTask = new EventEmitter<Task>()
  @Output() onCambiarTarea = new EventEmitter<Task>()

  eliminar(){
    this.onEliminarTask.emit(this.item)
  }

  cambiarTarea(){
    this.onCambiarTarea.emit(this.item)
  }
}
