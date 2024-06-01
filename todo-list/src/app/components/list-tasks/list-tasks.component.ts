import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css',
})
export class ListTasksComponent {
  @Input() listaTareas!: Task[]
  @Output() onEliminarTask = new EventEmitter<Task>()
  @Output() onCambiarTarea = new EventEmitter<Task>()
  
  eliminarTask(task: Task){
    this.onEliminarTask.emit(task)
  }

  cambiarTarea(task: Task){
    this.onCambiarTarea.emit(task)
  }
}
