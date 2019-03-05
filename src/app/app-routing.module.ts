import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoListImportantComponent } from './todo/todo-list-important/todo-list-important.component';

@Injectable()
export class MyGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(state.url);
    console.log(next.url);

    return true;
  }
}

const routes: Routes = [
  { path: 'lists/important', component: TodoListImportantComponent },
  { path: 'lists/:id', component: TodoListComponent },
  // { path: '**', redirectTo: 'lists/important', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

