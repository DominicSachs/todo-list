import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { MaterialModule } from '../shared/modules/material.module';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './services/todo.service';
import { TodoListImportantComponent } from './todo-list-important/todo-list-important.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { FormsModule } from '@angular/forms';
import { TodoItemNewComponent } from './todo-item-new/todo-item-new.component';

@NgModule({
  declarations: [
    NewTodoComponent,
    TodoListComponent,
    TodoListImportantComponent,
    TodoItemComponent,
    TodoHeaderComponent,
    TodoItemNewComponent
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
    TodoItemComponent,
    TodoItemNewComponent
  ]
})
export class TodoModule { }
