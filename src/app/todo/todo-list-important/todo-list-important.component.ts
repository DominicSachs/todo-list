import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'todo-list-important',
  templateUrl: './todo-list-important.component.html',
  styleUrls: ['./todo-list-important.component.scss']
})
export class TodoListImportantComponent implements OnInit {
  @Input()
  todo: Todo;

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.route.params.subscribe(_ => {
        this.todoService.getImportantTodo().subscribe(result => this.todo = result);
    });
  }

  completedChange() {
    this.todo.items = this.todo.items.sort((a, b) => a.completed ? 1 : -1);
  }

  importantChange(_: TodoItem, index: number) {
    this.todo.items.splice(index, 1);
  }
}
