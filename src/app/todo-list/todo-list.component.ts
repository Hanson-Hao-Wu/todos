import { Component, OnInit } from '@angular/core';

import { Todo } from '../model/todo';
import { TodoService } from '../servic/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todos: Todo[];

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  refresh(): void {
    this.getTodos();
  }
}
