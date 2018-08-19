import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ProgressPageComponent } from './progress-page/progress-page.component';
import { CentrelinkDashboardComponent } from './centrelink-dashboard/centrelink-dashboard.component';
import { CentrelinkFormComponent } from './centrelink-form/centrelink-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'UnderConstruction', component: ProgressPageComponent },
  { path: 'dashboard/centrelink', component: CentrelinkDashboardComponent },
  { path: 'dashboard/centrelink/centrelink-form', component: CentrelinkFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }