import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }
  isEditMode = false;
1;

  ngOnInit() {
  }

  onLabelClick() {
    this.isEditMode = !this.isEditMode;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    console.log(event);
    console.log(this.elementRef);
  //   if (!this.elementRef.nativeElement.contains(event.target)) {
  //     this.isEditMode = false;
  //   }
  }
}
