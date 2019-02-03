import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input()
  todo: Todo;

  completedChange() {
    this.todo.items = this.todo.items.sort((a, b) => a.completed ? 1 : -1);
  }
}
