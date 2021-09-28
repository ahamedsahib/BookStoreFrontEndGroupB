import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './Component/login-register/login-register.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { HomeComponent } from './Component/home/home.component';

 
const routes: Routes = [
  {path:'login', component:LoginRegisterComponent},
  { path:'forgotPassword', component:ForgotPasswordComponent},
  { path:'resetPassword', component:ResetPasswordComponent},
  { path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
