import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { MaterialModule } from '../shared/modules/material.module';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './services/todo.service';
import { TodoListImportantComponent } from './todo-list-important/todo-list-important.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { ClickOutsideDirective } from '../shared/directives/click-outside.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClickOutsideDirective,
    NewTodoComponent,
    TodoListComponent,
    TodoListImportantComponent,
    TodoItemComponent,
    TodoHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    TodoService
  ],
  exports: [
    NewTodoComponent,
    TodoListComponent,
    TodoListImportantComponent,
    TodoItemComponent
  ]
})
export class TodoModule { }
