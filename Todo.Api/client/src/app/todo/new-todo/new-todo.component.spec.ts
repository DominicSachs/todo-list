import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { NewTodoComponent } from './new-todo.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';

describe('NewTodoComponent', () => {
  let component: NewTodoComponent;
  let fixture: ComponentFixture<NewTodoComponent>;
  const todoService = <TodoService>{
    addTodo: _ => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule],
      declarations: [NewTodoComponent],
      providers: [
        { provide: TodoService, useValue: todoService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not add todo if title is empty', () => {
    component.title = '';
    spyOn(todoService, 'addTodo');

    component.addTodo();

    expect(todoService.addTodo).not.toHaveBeenCalled();
  });

  it('should add todo', () => {
    component.title = 'test';
    spyOn(todoService, 'addTodo');

    component.addTodo();

    expect(todoService.addTodo).toHaveBeenCalled();
  });
});
