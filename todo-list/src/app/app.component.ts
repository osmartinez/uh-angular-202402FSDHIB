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

  get totalTareas(){
    return this.listaTareas.length
  }

  get totalTareasChecked(){
    return this.listaTareas.filter(x=>x.estado === true).length
  }

  tareaRecibida(msg: string){
    this.listaTareas.push({texto: msg, estado: false})
  }

  tareaEliminada(msg: Task){
    const i =  this.listaTareas.findIndex(x=> x.texto === msg.texto)
    this.listaTareas.splice(i,1)
  }

  tareaCambiada(msg: Task){
    for(const tarea of this.listaTareas){
      if(tarea.texto === msg.texto){
        tarea.estado = !tarea.estado
      }
    }
  }
}

