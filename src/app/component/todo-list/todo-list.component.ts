import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { Store } from '@ngrx/store';

import {
  addTodos,
  toggleTodos,
  removeTodos,
} from 'src/app/store/actions/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos$!: Todo[];
  newTodoTitle = '';
  constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
    this.store.select('todos').subscribe((todosState: { todos: Todo[] }) => {
      this.todos$ = todosState.todos;
      console.log(this.todos$);
    });
  }

  addTodo(): void {
    if (this.newTodoTitle.trim() === '') {
      return;
    }
    const todo: Todo = {
      id: Date.now().toString(),
      title: this.newTodoTitle,
      completed: false,
      userId: 1,
    };
    this.store.dispatch(addTodos({ todo }));
    this.newTodoTitle = '';
  }

  toggleTodo(id: string): void {
    this.store.dispatch(toggleTodos({ id }));
  }
  removeTodo(id: string): void {
    this.store.dispatch(removeTodos({ id }));
  }
}
