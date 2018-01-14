import { Component, OnInit } from '@angular/core';
import { TodoService } from '../servic/todo.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getDoneList();
  }

  doneList: Todo[];

  getDoneList(): void {
    this.todoService.getTodosByStatus("done")
      .subscribe(doneList => this.doneList = doneList);
  }

  unCheckDone(todo: Todo): void {
    this.doneList = this.doneList.filter(done => done !== todo);
    todo.status='todo';
    todo.lastUpdateTime=Date.now();
    this.todoService.updateTodo(todo).subscribe();
  }

  deleteDone(todo: Todo): void {
    this.doneList = this.doneList.filter(done => done !== todo);
    this.todoService.deleteTodo(todo).subscribe();
  }

  refresh(): void {
    this.getDoneList();
  }


}
