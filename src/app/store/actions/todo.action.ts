import { createAction, props } from '@ngrx/store';
import { Todo } from './../../models/todo.model';

export const loadTodos = createAction(
  '[Todos] Load Todos',
  props<{ todos: Todo[] }>()
);

export const addTodos = createAction(
  '[Todos] Add Todos',
  props<{ todo: Todo }>()
);

export const toggleTodos = createAction(
  '[Todos] Toggle Todos',
  props<{ id: string }>()
);

export const removeTodos = createAction(
  '[Todos] Remove Todos',
  props<{ id: string }>()
);
