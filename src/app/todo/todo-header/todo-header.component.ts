import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  @Input()
  title: string;

  @Output()
  nameChanged = new EventEmitter<string>();

  @Output()
  deleteList = new EventEmitter();

  isEditMode: boolean;

  constructor() { }

  ngOnInit() {
  }

  editTitle() {
    of({}).pipe(
      delay(50),
    ).subscribe(_ => this.isEditMode = !this.isEditMode );
  }

  delete() {
    this.deleteList.emit();
  }

  close() {
    this.nameChanged.emit(this.title);
    this.isEditMode = false;
  }
}
