export class TodoItem {
    constructor(public title: string, public isImportant?: boolean, public completed?: boolean) {
        this.isImportant = false;
        this.completed = false;
    }

    index: number;
}
