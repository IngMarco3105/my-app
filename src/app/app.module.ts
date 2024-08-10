import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskInputComponent } from './task-input/task-input.component';
import {FormsModule}from '@angular/forms';


@NgModule({
  declarations: [ // AQUI VAN LOS COMPONENETES
    AppComponent,
    TaskListComponent,
    TaskInputComponent
  ],
  imports: [ // AQUI LOS MODULOS QUE SE VAN USAR
    BrowserModule,
    AppRoutingModule,
    FormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
