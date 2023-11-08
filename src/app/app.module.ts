import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoReducer } from './store/reducers/todo.reduces';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/effects/todo.effects';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: TodoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
