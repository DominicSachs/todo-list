import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input()
  todo: Todo;

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];

    if (id) {
      this.todoService.getTodo(id).subscribe(result => this.todo = result);
    }
  }

  completedChange() {
    this.todo.items = this.todo.items.sort((a, b) => a.completed ? 1 : -1);
  }
}
