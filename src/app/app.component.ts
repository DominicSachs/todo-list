import { Component } from '@angular/core';
import { Todo } from './todo/models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  todos: Todo[] = [{
    title: 'Einkaufsliste',
    items: [
      { title: 'Möhren', completed: false },
      { title: 'Gurke' },
      { title: 'Wein' },
      { title: 'Bier' },
      { title: 'Äpfel' }
    ]}
  ];
}
