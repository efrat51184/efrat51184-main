import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './general/about/about.component';
import { HomeComponent } from './general/home/home.component';
import { DisplaySignComponent } from './learning/display-sign/display-sign.component';
import { PracticeComponent } from './learning/practice/practice.component';
import { TestComponent } from './learning/test/test.component';
import { LoginComponent } from './logon/login/login.component';
import { RegisterComponent } from './logon/register/register.component';


const APP_ROOT: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "displaySign", component: DisplaySignComponent },
  { path: "about", component: AboutComponent },
  { path: "home", component: HomeComponent },
  { path: "practice", component: PracticeComponent },
  { path: "test", component: TestComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROOT)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
