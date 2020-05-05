import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate} from '@angular/router';

import { LoginComponent } from './Pages/Login/login.component';
import { HeaderComponent } from './Components/Header/header.component';
import { RegisterComponent } from './Pages/Register/register.component';
import { DashboardComponent } from './Pages/Dashbaord/dashbaord.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  LoginComponent,
  HeaderComponent,
  RegisterComponent,
  DashboardComponent
]