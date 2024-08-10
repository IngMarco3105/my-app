import { Component } from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html', 
  styleUrls: ['./task-input.component.css'],
  
})

export class TaskInputComponent {
  title:string="";
  description:string="";

  constructor(private taskservice:TaskService){

  }

  agragartarea():void{
    if(this.title.trim() && this.description.trim()){
        this.taskservice.agregar(this.title,this.description);
        this.title="";
        this.description="";
    }
    else{
      console.log("Ingresa tus tareas en tu formulario");
    }

  }
  
}
