import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ButtonComponent } from './components/button/button.component';
import { PassInputComponent } from './components/pass-input/pass-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TextInputComponent,
    ButtonComponent,
    PassInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
