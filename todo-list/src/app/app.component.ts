import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTaskComponent, ListTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //listaTareas: string[] = ["pasear al perro","comprar el pan"]
  listaTareas: Task[] = [
    { texto: 'comprar pan', estado: false },
    { texto: 'tarea 2', estado: true },
    { texto: 'tarea 3', estado: false },
    
  ];

  tareaRecibida(){
    console.log('tarea recibida!!')
  }
}
