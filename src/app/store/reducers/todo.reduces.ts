import { createReducer, on } from '@ngrx/store';
import { addTodos, toggleTodos, removeTodos } from '../actions/todo.action';
import { Todo } from './../../models/todo.model';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [
    {
      id: '1',
      title: 'Todo 1',
      completed: false,
      userId: 1,
    },
  ],
};

export const TodoReducer = createReducer(
  initialState,
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
