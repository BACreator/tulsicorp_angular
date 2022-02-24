import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component'
import {RegistrationComponent} from '../app/credentials/registration/registration.component'
import { SigninComponent } from './credentials/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'signin', pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'signin',component:SigninComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'home',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
