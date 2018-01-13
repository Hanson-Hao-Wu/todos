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

  refresh(): void {
    this.getDoneList();
  }


}
