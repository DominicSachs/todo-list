import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { NewTodoComponent } from './new-todo.component';


describe('NewTodoComponent', () => {
  let component: NewTodoComponent;
  let fixture: ComponentFixture<NewTodoComponent>;
  const todoService = <TodoService>{
    addTodo: _ => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ NewTodoComponent ],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not add todo if title is empty', () => {
    component.title = '';
    spyOn(todoService, 'addTodo');

    component.addTodo();

    expect(todoService.addTodo).not.toHaveBeenCalled();
  });
});
