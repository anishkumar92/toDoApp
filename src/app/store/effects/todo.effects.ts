import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo.model';
import * as TodoActions from './../actions/todo.action';
import { TodoService } from 'src/app/services/todo.service';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoservices: TodoService) {}
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      exhaustMap(() =>
        this.todoservices
          .getTodos()
          .pipe(map((todos: Todo[]) => TodoActions.loadTodos({ todos })))
      )
    )
  );
}
