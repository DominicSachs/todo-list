import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListImportantComponent } from './todo-list-important.component';

describe('TodoListComponent', () => {
  let component: TodoListImportantComponent;
  let fixture: ComponentFixture<TodoListImportantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListImportantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListImportantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
