import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [NewTodoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NewTodoComponent
  ]
})
export class TodoModule { }
