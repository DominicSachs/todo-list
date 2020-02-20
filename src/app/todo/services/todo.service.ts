import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo';

export class TodoService {
  private todos: Todo[] = [{
    id: 1,
    title: 'Einkaufsliste',
    items: [
      { title: 'Möhren', index: 0, completed: false },
      { title: 'Gurke', index: 1, completed: false },
      { title: 'Wein', index: 2, completed: false },
      { title: 'Bier', index: 3, completed: false },
      { title: 'Äpfel', index: 4, completed: false }
    ]
  },
  {
    id: 2,
    title: 'Einladungsliste',
    items: [
      { title: 'Robert de Niro', index: 0, completed: false },
      { title: 'Al Pacino', index: 1, completed: false },
      { title: 'Joe Pesci', index: 2, completed: false },
      { title: 'Frank Vincent', index: 3, completed: false },
      { title: 'Andy García', index: 4, completed: false },
      { title: 'Chazz Palminteri', index: 5, completed: false }
    ]
  }];

  getTodos(): Observable<Todo[]> {
    // load from http
    return of(this.todos);
  }

  getImportantTodo(): Observable<Todo> {
    const todo = <Todo>{ title: 'Wichtig', id: 0 };
    todo.items = [].concat.apply([], this.todos.map(t => {
      return t.items.filter(i => i.isImportant);
    }));

    return of(todo);
  }

  getTodo(id: number): Observable<Todo> {
    // load from http
    const todo = this.todos.find(t => t.id === id);
    return of(todo);
  }

  deleteTodo(id: number): Observable<any> {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos.splice(idx, 1);
    return of({});
  }

  addTodo(title: string) {
    const maxId = Math.max(...this.todos.map(t => t.id), 0);
    this.todos.push(<Todo>{ id: maxId + 1, title: title, items: [] });
  }
}
