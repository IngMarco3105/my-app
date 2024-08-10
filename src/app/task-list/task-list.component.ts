import { Component } from '@angular/core';
import {TaskService} from '../task.service';
import { task } from 'src/task_model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  
  constructor(private taskservice:TaskService){  
   
  }

  get tasks():task[]{ // EL GETTER O GET sirve para listar
   return this.taskservice.listarTarea();
  } 

  removertarea(id:number):void{
    this.taskservice.eliminar(id);
  }

  actualizarestadotarea(task:task):void{
     this.taskservice.actualizarestado(task.id);
  }


  



}
