import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ProgressPageComponent } from './progress-page/progress-page.component';
import { CentrelinkDashboardComponent } from './centrelink-dashboard/centrelink-dashboard.component';
import { CentrelinkFormComponent } from './centrelink-form/centrelink-form.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { WebcamModule } from 'ngx-webcam';
import { LivechatComponent } from './livechat/livechat.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ProgressPageComponent,
    CentrelinkDashboardComponent,
    CentrelinkFormComponent,
    PasswordResetComponent,
    LivechatComponent,
    UserInfoComponent
  ],
  imports: [
    WebcamModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPopoverModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
