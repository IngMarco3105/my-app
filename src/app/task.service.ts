import { Injectable } from '@angular/core';
import { max } from 'rxjs';
import { task } from 'src/task_model';

@Injectable({ // decorador que indica que la clase es un servicio y qeu se puede inyectar en otro compenente
  providedIn: 'root' // 
})
export class TaskService {

  private tasks:task[]= [];

  private nextId:number=1;
 
constructor(){
  this.cargartarea();
}

// CODIGO PARA MI LOCALSTORAGE //
private guardartarea():void{
  localStorage.setItem('tareas',JSON.stringify(this.tasks));
}

private cargartarea():void{
 const task = localStorage.getItem('tareas');
 if(task){
  this.tasks = JSON.parse(task); // aqui lo meto al array la tarea que trae del localstorage
  this.nextId = this.tasks.length? Math.max(...this.tasks.map(task=>task.id)) + 1:1;
 }
}


//funcion listar
listarTarea():task[]{
  return this.tasks;
  
}

  //funcion agregar

  agregar(title:string,description:string):void{
    this.tasks.push({id:this.nextId++,title,description,complete:false});
    this.guardartarea();
  }

  eliminar(id:number):void{
    this.tasks =  this.tasks.filter(x=> x.id !== id);// filtrar todos los diferentes del id
    this.guardartarea();
  }

  actualizarestado(id:number):void{
    const task = this.tasks.find(x=> x.id ===id);

    if(task){
      task.complete=!task.complete; // le estoy diciendo que cambia al estado contrario
      this.guardartarea();
    }
  }
 
}
