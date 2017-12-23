import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';
import { HomeComponent }  from './home/home.component';
import { SignupComponent }  from './signup/signup.component';
import { LoginComponent }  from './login/login.component';
import { PageNotFoundComponent }  from './others/pageNotFound.component';
import { EmployeeComponent }  from './employee/employee.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, HomeComponent, SignupComponent,
                  LoginComponent, PageNotFoundComponent, EmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
