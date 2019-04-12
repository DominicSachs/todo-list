import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { TodoService } from '../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListImportantComponent } from './todo-list-important.component';


describe('TodoListComponent', () => {
  let component: TodoListImportantComponent;
  let fixture: ComponentFixture<TodoListImportantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [TodoListImportantComponent, TodoItemComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: 'test' }) } },
        TodoService
      ]
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
