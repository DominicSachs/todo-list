import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { TodoItem } from '../models/todo-item';
import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, MaterialModule],
      declarations: [TodoItemComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todoItem = <TodoItem>{ title: 'test', completed: false };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set completed and emit completedChanged', () => {
    component.todoItem = <TodoItem>{ title: 'test', completed: false };
    spyOn(component.completedChange, 'emit');

    component.completeClick(<MatCheckboxChange>{ checked: true });

    expect(component.todoItem.completed).toBeTruthy();
    expect(component.completedChange.emit).toHaveBeenCalledWith(<TodoItem>{ title: 'test', completed: true });
  });

  it('should set isImportant and emit importantChange', () => {
    component.todoItem = <TodoItem>{ title: 'test', isImportant: false };
    spyOn(component.importantChange, 'emit');

    component.importantClick();

    expect(component.todoItem.isImportant).toBeTruthy();
    expect(component.importantChange.emit).toHaveBeenCalledWith(<TodoItem>{ title: 'test', isImportant: true });
  });
});
