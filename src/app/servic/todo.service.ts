import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Todo } from '../model/todo';
import { retry } from 'rxjs/operators/retry';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TodoService {

  private todosUrl = 'api/todos'

  constructor(private http: HttpClient) { }

  getTodosByStatus(status:string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}/?status=${status}`).pipe(
      tap(todos => console.log(`TodoService fetched getTodosByStatus=${status} ${todos.length}`)),
      catchError(this.handleError<any>('getTodos'))
    );
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl).pipe(
      tap(todos => console.log(`TodoService getTodos todo ${todos.length}`)),
      catchError(this.handleError<any>('getTodos'))
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    this.log(`TodoService start addTodo`);
    this.log(`${todo}`);
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions).pipe(
      tap((todo: Todo) => this.log(`TodoService add todo id=${todo.id} content=${todo.content}`)),
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  /** PUT: update the todo on the server */
  updateTodo (todo: Todo): Observable<any> {
    return this.http.put(this.todosUrl, todo, httpOptions).pipe(
      tap(_ => this.log(`updated todo id=${todo.id}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  /** DELETE: delete the todo from the server */
  deleteTodo (todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;

    return this.http.delete<Todo>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted todo id=${id}`)),
      catchError(this.handleError<Todo>('deleteTodo'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`TodoService ${message}`);
  }


}
