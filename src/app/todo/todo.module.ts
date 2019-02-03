import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { MaterialModule } from '../shared/modules/material.module';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoMenuComponent } from './todo-menu/todo-menu.component';

@NgModule({
  declarations: [NewTodoComponent, TodoItemComponent, TodoListComponent, TodoMenuComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NewTodoComponent,
    TodoListComponent,
    TodoItemComponent
  ]
})
export class TodoModule { }
