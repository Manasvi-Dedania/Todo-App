import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoListService } from '../shared/todo-list.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoForm: any;
  public todoName = '';
  public description = '';
  public showDiv = false;


  public todoId: any;


  public todos: Todo[] = [];

  constructor(public todoListService: TodoListService,private formBuilder: FormBuilder,private route: ActivatedRoute)
  {
    this.todoForm = formBuilder.group({
      name: '',
      description: '',
    });
  }

  onSubmit() {
    //console.log('on submit', this.todoForm);
    this.todoName = this.todoForm.value.name
    this.description = this.todoForm.value.description;
    this.showDiv= false;

    console.log('name', this.todoName)
    console.log('Description', this.description)
    this.addTodo()
  }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.todoId = params['id'];
   this.todos = this.getTodosfromtsfile();
    // });

  }

  public addTodo(): void {
    if (this.todoName && this.description) {
      this.todoListService.addTodo(this.todoName, this.description);
      this.todoName = '';
      this.description = '';
    }
  }
  onClickOpenForm() {
    console.log('onclick');
    this.showDiv = true
  }

  getTodosfromtsfile():Todo[] {
    return this.todoListService.getTodos();
  }

  removetask(id:number){
    this.todos=this.todos.filter(todo=>todo.id!==id)
    console.log('removetask', this.todos)

      }
    }

  // public setSelected(id:number) {
  //   //console.log("id", id)
  //   this.todoListService.setTodoForDetails(id);
  // }

