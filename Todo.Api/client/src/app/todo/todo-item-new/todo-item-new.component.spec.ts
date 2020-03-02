import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemNewComponent } from './todo-item-new.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormsModule } from '@angular/forms';
import { Todo } from '../models/todo';

describe('TodoItemNewComponent', () => {
  let component: TodoItemNewComponent;
  let fixture: ComponentFixture<TodoItemNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule],
      declarations: [TodoItemNewComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('adds nothing if title is empty', () => {
    component.title = '';
    component.todo = <Todo>{ items: [] };

    component.add();

    expect(component.todo.items.length).toBe(0);
  });

  it('adds a new item and resets the title property if title is not empty', () => {
    component.title = 'test';
    component.todo = <Todo>{ items: [] };

    component.add();

    expect(component.todo.items.length).toBe(1);
    expect(component.todo.items[0].title).toBe('test');
    expect(component.title).toBe('');
  });
});
