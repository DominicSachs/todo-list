import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { TodoService } from '../services/todo.service';
import { TodoHeaderComponent } from '../todo-header/todo-header.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoItemNewComponent } from '../todo-item-new/todo-item-new.component';
import { TodoItem } from '../models/todo-item';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let todoService: TodoService;
  let fixture: ComponentFixture<TodoListComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule],
      declarations: [TodoListComponent, TodoItemComponent, TodoHeaderComponent, TodoItemNewComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: 'test' }) } },
        { provide: Router, useValue: mockRouter },
        TodoService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();
  });

  it('changes the todo title', () => {
    component.todo = <any>{};

    component.titleChanged('test');

    expect(component.todo.title).toBe('test');
  });

  it('sorts the todo items on compledChange', () => {
    component.todo = <any>{
      items: [
        <TodoItem>{ id: '1', title: '1', completed: true, index: 1 },
        <TodoItem>{ id: '2', title: '2', completed: false, index: 2 },
        <TodoItem>{ id: '3', title: '3', completed: true, index: 3 }
      ]
    };

    component.completedChange();

    expect(component.todo.items[0].index).toBe(2);
    expect(component.todo.items[1].index).toBe(1);
    expect(component.todo.items[2].index).toBe(3);
  });

  it('deleteList calls delete on todo service', () => {
    spyOn(todoService, 'deleteTodo').and.returnValue(of({}));
    component.todo = <any>{ id: 1 };
    component.deleteList();

    expect(todoService.deleteTodo).toHaveBeenCalledWith(1);
  });
});
