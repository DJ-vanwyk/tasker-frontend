import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ButtonComponent } from './components/button/button.component';
import { PassInputComponent } from './components/pass-input/pass-input.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { UsersComponent } from './pages/users/users.component';
import { StatusesComponent } from './pages/statuses/statuses.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TextInputComponent,
    ButtonComponent,
    PassInputComponent,
    TasksComponent,
    NavBarComponent,
    NavButtonComponent,
    UsersComponent,
    StatusesComponent,
    WrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
