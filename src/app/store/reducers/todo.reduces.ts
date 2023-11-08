import { createReducer, on } from '@ngrx/store';
import {
  addTodos,
  toggleTodos,
  removeTodos,
  loadTodos,
} from '../actions/todo.action';
import { Todo } from './../../models/todo.model';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const TodoReducer = createReducer(
  initialState,
  on(loadTodos, (state, { todos }) => ({ ...state, todos })),
  on(addTodos, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(toggleTodos, (state, { id }) => ({
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }),
  })),
  on(removeTodos, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }))
);
