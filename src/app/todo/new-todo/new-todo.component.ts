import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  isEditMode = false;
  title: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() { }

  onLabelClick() {
    of({}).pipe(
      delay(50),
    ).subscribe(_ => this.isEditMode = !this.isEditMode );
  }

  addTodo() {
    if (this.title) {
      this.todoService.addTodo(this.title);
    }
    this.title = '';
    this.isEditMode = false;
  }
}
