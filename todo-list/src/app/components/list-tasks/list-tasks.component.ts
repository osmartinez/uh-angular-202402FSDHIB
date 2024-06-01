import { Component } from '@angular/core';
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
  //listaTareas: string[] = ["pasear al perro","comprar el pan"]
  listaTareas: Task[] = [
    { texto: 'comprar pan', estado: false },
    { texto: 'tarea 2', estado: true },
    { texto: 'tarea 3', estado: false },
  ];
}
