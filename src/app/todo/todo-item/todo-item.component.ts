import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todoItem: TodoItem;

  @Output()
  completedChange = new EventEmitter<TodoItem>();

  @Output()
  importantChange = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit() { }

  completeClick(event: MatCheckboxChange) {
    this.todoItem.completed = event.checked;
    this.completedChange.emit(this.todoItem);
  }

  importantClick() {
    this.todoItem.isImportant = !this.todoItem.isImportant;
    this.importantChange.emit(this.todoItem);
  }
}
