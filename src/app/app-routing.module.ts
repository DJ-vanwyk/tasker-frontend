import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewStatusComponent } from './pages/new-status/new-status.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { StatusesComponent } from './pages/statuses/statuses.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UsersComponent } from './pages/users/users.component';
import { ViewStatusComponent } from './pages/view-status/view-status.component';
import { ViewTaskComponent } from './pages/view-task/view-task.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  //Login page
  { path: 'login', component: LoginComponent },
  //Tasks pages
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/new', component: NewTaskComponent },
  { path: 'tasks/:id', component: ViewTaskComponent },
  //Users pages
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: NewUserComponent },
  { path: 'users/:id', component: ViewUserComponent },
  //Statuses pages
  { path: 'statuses', component: StatusesComponent },
  { path: 'statuses/new', component: NewStatusComponent },
  { path: 'statuses/:id', component: ViewStatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
