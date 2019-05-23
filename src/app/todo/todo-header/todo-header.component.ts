import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent {
  @Input()
  title: string;
  isEditMode: boolean;

  @Output()
  nameChanged = new EventEmitter<string>();
  @Output()
  deleteList = new EventEmitter();

  editTitle() {
    this.isEditMode = !this.isEditMode;
  }

  delete() {
    this.deleteList.emit();
  }

  close() {
    this.nameChanged.emit(this.title);
    this.isEditMode = false;
  }
}
