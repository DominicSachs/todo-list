import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo';

export class TodoService {
  private todos: Todo[] = [{
    id: 1,
    title: 'Einkaufsliste',
    items: [
      { title: 'Möhren' },
      { title: 'Gurke' },
      { title: 'Wein' },
      { title: 'Bier' },
      { title: 'Äpfel' }
    ]
  },
  {
    id: 2,
    title: 'Einladungsliste',
    items: [
      { title: 'Robert de Niro' },
      { title: 'Al Pacino' },
      { title: 'Joe Pesci' },
      { title: 'Frank Vincent' },
      { title: 'Andy García' },
      { title: 'Chazz Palminteri' }
    ]
  }
  ];

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
