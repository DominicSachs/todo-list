import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input()
  todo: Todo;

  constructor(private route: ActivatedRoute, private router: Router, private todoService: TodoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.todoService.getTodo(+id).subscribe(result => this.todo = result);
    });
  }

  completedChange() {
    this.todo.items = this.todo.items.sort((a, b) => a.completed ? 1 : -1);
  }

  titleChanged(title: string) {
    this.todo.title = title;
  }

  deleteList() {
    this.todoService.deleteTodo(this.todo.id)
      .subscribe(_ => this.router.navigate(['lists', 'important']));
  }
}
