import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todos: Todo[] = [];
  public selectedTodo:any

  constructor() { }

  public getTodos(): Todo[] {
    return this.todos

  }

  public addTodo(name: string, description:string): void {
    let newId = 0;
    if (this.todos.length) {
      newId = Math.max(...this.todos.map(t => t.id)) + 1;
    }


    this.todos.push({ id: newId, name: name, description:description});

    console.log('todos', this.todos)

    localStorage.setItem("list",JSON.stringify(this.todos))
  }

  public getTodoForDetail(todoId:number){
    console.log('this.todo', this.selectedTodo)
    if(this.todos.length > 0) {
      this.selectedTodo =  this.todos.find((todo)=> todo.id == todoId)
    }
    console.log('selectedTodo', this.selectedTodo)
    return this.selectedTodo
  }
}
