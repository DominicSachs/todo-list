import { TodoItem } from './todo-item';

export interface Todo {
    id: number;
    title: string;
    items: TodoItem[];
}
