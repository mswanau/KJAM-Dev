import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ProgressPageComponent } from './progress-page/progress-page.component';
import { CentrelinkDashboardComponent } from './centrelink-dashboard/centrelink-dashboard.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'UnderConstruction', component: ProgressPageComponent },
  { path: 'dashboard/centrelink', component: CentrelinkDashboardComponent },
  { path: 'reset', component: PasswordResetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }