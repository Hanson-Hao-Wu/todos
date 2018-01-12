import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DoneListComponent } from './done-list/done-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoService } from './servic/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DoneListComponent,
    AddTodoComponent,
    TodoSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
