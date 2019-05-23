import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'todo-item-new',
  templateUrl: './todo-item-new.component.html',
  styleUrls: ['./todo-item-new.component.scss']
})
export class TodoItemNewComponent {
  @Input()
  todo: Todo;
  title: string;

  add() {
    if (this.title) {
      this.todo.items.push(<TodoItem>{ title: this.title });
      this.title = '';
    }
  }
}
