import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos : any[] = [];

constructor() {
this.todos.push('passear com cachorro');
this.todos.push('ir ao supermercado');
this.todos.push('cortar cabelo');
this.todos.push(1999);
this.todos.push([{message : 'teste'}]);
this.todos.push(new Date());
  }
login() {
  
}

}
