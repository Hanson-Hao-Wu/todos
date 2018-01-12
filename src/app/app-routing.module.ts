import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {DoneListComponent} from './done-list/done-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/todoList', pathMatch: 'full' },
  { path: 'todoList', component: TodoListComponent },
  { path: 'doneList', component: DoneListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
