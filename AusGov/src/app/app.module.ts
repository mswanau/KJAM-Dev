import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AuthenticationService } from './authentication.service';
import { UsersService } from './users.service';
import { User } from './user';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    AuthenticationService,
    UsersService,
    HttpInterceptor,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
