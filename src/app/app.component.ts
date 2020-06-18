import { Component } from '@angular/core';
import { Todo } from './models/todo.models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Passear com o cachorro', false));
    this.todos.push(new Todo(2, 'Ir ao supermercado', true));
    this.todos.push(new Todo(3, 'Cortar o cabelo', false));
  }
  alterarTexto() {
    this.title = 'Texto Alterado'
  }

}
