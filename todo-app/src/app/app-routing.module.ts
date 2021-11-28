import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: 'todo-details/:id', component: TodoDetailsComponent },
  { path: 'todo-list', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TodoDetailsComponent,TodoListComponent]

