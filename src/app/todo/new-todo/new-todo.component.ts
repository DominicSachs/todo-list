import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }
  isEditMode = false;

  ngOnInit() {
  }

  onLabelClick() {
    this.isEditMode = !this.isEditMode;
  }

  close() {
    this.isEditMode = false;
    console.log('close');
  }
}
