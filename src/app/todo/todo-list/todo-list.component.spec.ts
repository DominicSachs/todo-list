import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { TodoService } from '../services/todo.service';
import { TodoHeaderComponent } from '../todo-header/todo-header.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListComponent } from './todo-list.component';


describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule],
      declarations: [TodoListComponent, TodoItemComponent, TodoHeaderComponent],
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
