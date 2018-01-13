import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DoneListComponent } from './done-list/done-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoService } from './servic/todo.service';
import { InMemoryDataService } from './servic/in-memory-data.service';
import { MessageService } from './servic/message.service';


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
    FormsModule,
    AppRoutingModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [TodoService, InMemoryDataService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
