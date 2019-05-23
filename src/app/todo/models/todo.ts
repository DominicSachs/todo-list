import { TodoItem } from './todo-item';

export class Todo {
    constructor() {
        this.items = [];
    }

    id: number;
    title: string;
    items: TodoItem[];
}
