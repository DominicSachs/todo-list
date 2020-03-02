import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  title: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() { }

  addTodo() {
    if (this.title) {
      this.todoService.addTodo(this.title);
    }
    this.title = '';
  }
}
