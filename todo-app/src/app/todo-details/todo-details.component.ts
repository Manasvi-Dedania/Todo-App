import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../shared/todo-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  public postId: any;
  public postDetails: any;
  public selectedTodo:any;

  constructor(public todoListService: TodoListService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      this.getTodo(this.postId);
    });

  }

  public getTodo(todoId:number) {
    this.selectedTodo = this.todoListService.getTodoForDetail(todoId)
  }

}
