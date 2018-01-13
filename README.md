# Todos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Questions

1. Login page layout
2. Disable the clicking during process request or waiting for response
3. data validation
4. how to refresh the other component after one event happened.
5. scope for value in differnet component, and how can parent & child component pass vaule, how can sibling component pass vaule



# Todos Project Log

## Build Project

In windows. Run Git Bash As administration and execute `ng new todos`

	cd todos
	code .

	$ cd src/app/

	s7791221@TCSPC0K02CY MINGW64 /c/Hao/angularworkspace/todos/src/app (master)
	$ mkdir service
	
	ng g s hero --module=../app

	s7791221@TCSPC0K02CY MINGW64 /c/Hao/angularworkspace/todos/src/app (master)
	$ mkdir model

	$ cd src/app/
	
	s7791221@TCSPC0K02CY MINGW64 /c/Hao/angularworkspace/todos/src/app (master)
	$ mkdir service
	
	s7791221@TCSPC0K02CY MINGW64 /c/Hao/angularworkspace/todos/src/app (master)
	$ mkdir model



	$ ng g c todo-search
	installing component
	  create src\app\todo-search\todo-search.component.css
	  create src\app\todo-search\todo-search.component.html
	  create src\app\todo-search\todo-search.component.spec.ts
	  create src\app\todo-search\todo-search.component.ts
	  update src\app\app.module.ts
	
	s7791221@TCSPC0K02CY MINGW64 /c/Hao/angularworkspace/todos/src/app (master)
	$ ng g c todo-list
	installing component
	  create src\app\todo-list\todo-list.component.css
	  create src\app\todo-list\todo-list.component.html
	  create src\app\todo-list\todo-list.component.spec.ts
	  create src\app\todo-list\todo-list.component.ts
	  update src\app\app.module.ts
	
	s7791221@TCSPC0K02CY MINGW64 /c/Hao/angularworkspace/todos/src/app (master)
	$ ng g c done-list
	installing component
	  create src\app\done-list\done-list.component.css
	  create src\app\done-list\done-list.component.html
	  create src\app\done-list\done-list.component.spec.ts
	  create src\app\done-list\done-list.component.ts
	  update src\app\app.module.ts
	
	s7791221@TCSPC0K02CY MINGW64 /c/Hao/angularworkspace/todos/src/app (master)
	$ ng g c add-todo
	installing component
	  create src\app\add-todo\add-todo.component.css
	  create src\app\add-todo\add-todo.component.html
	  create src\app\add-todo\add-todo.component.spec.ts
	  create src\app\add-todo\add-todo.component.ts
	  update src\app\app.module.ts

	$ ng g c navigation
	installing component
	  create src\app\navigation\navigation.component.css
	  create src\app\navigation\navigation.component.html
	  create src\app\navigation\navigation.component.spec.ts
	  create src\app\navigation\navigation.component.ts
	  update src\app\app.module.ts

## Route ##

	ng generate --help

	module <name> <options...>
      aliases: m
      --spec (Boolean) Specifies if a spec file is generated.
      --flat (Boolean) Flag to indicate if a dir is created.
      --routing (Boolean) (Default: false) Specifies if a routing module file should be generated.
      --app (String) Specifies app name to use.
        aliases: -a <value>
	
	ng g m app-routing //generate a module app-routing.module.ts in app-routing folder

	ng g m app-routing --flat //generate a module app-routing.module.ts in src/app/ folder

app-routing.module.ts

	const routes: Routes = [
	  { path: '', redirectTo: '/todoList', pathMatch: 'full' },
	  { path: 'todoList', component: TodoListComponent },
	  { path: 'doneList', component: DoneListComponent }
	];
	
	@NgModule({
	  imports: [RouterModule.forRoot(routes)],
	  exports: [RouterModule]
	})

app.module.ts
	
	import { AppRoutingModule }     from './app-routing.module';
	
	
	imports: [
	    AppRoutingModule
	],

app.component.html

	<router-outlet></router-outlet>

navigation.component.html
	
	<nav>
	    <a routerLink="/todoList">todo</a>
	    <a routerLink="/doneList">done</a>
	</nav>

NG-ZORRO

[https://ng.ant.design/#/docs/angular/introduce](https://ng.ant.design/#/docs/angular/introduce)

	npm install -g @angular/cli@latest
	npm install ng-zorro-antd --save
	npm install @angular/animations --save

## The Mock Service and HTTP Service

### Enable HTTP services

> HttpClient is Angular's mechanism for communicating with a remote server over HTTP.

> To make HttpClient available everywhere in the app,

app.module.ts

	import { HttpClientModule }    from '@angular/common/http';

### In-memory Web API & InMemoryDataService

	npm install angular-in-memory-web-api --save

	cd src/app/servic/
	ng g s in-memory-data --module=../app

app.module.ts

	import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
	import {InMemoryDataService} from './service/in-memory-data.service';	

	imports: [
		...
		HttpClientModule,
		// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
		// and returns simulated server responses.
		// Remove it when a real server is ready to receive requests.
		HttpClientInMemoryWebApiModule.forRoot(
		InMemoryDataService, { dataEncapsulation: false }
		)
	],
	
in-memory-data.Service.ts

	import { InMemoryDbService } from 'angular-in-memory-web-api';

	export class InMemoryDataService implements InMemoryDbService {
		createDb() {
			const heroes = [
				{ id: 11, content: 'Mr. Nice', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now() },
				{ id: 12, content: 'Narco', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now() }
			];
			return {heroes};
		}
	}

## message component and service

	ng g s message --module=../app



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

