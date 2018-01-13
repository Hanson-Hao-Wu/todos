import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../servic/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private todoService: TodoService, private router: Router) { }

  todoContent: string = '';

  ngOnInit() { }

  addTodo(): void {
    let content = this.todoContent.trim();
    this.todoContent = '';
    
    if (!content) {
      return;
    }
    let todo: Todo = {
      id: null,
      content: content,
      createTime: Date.now(),
      lastUpdateTime: Date.now(),
      reminderDate: Date.now(),
      status:"todo"
    };

    console.log(`click add todo icon with content: ${todo.content}`);

    this.todoService.addTodo(todo)
      .subscribe(() => {
       this.router.navigate(['/todoList']);
      });

  }


}
