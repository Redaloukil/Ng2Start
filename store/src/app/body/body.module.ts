import { NgModule } from "@angular/core";
import { BodyRoutingModule } from './body-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
    {path:'/' , component : HomeComponent },
    {path:'/dashbord',component: DashbordComponent},
    {path:'/login',component: LoginComponent},
    {path:'/signup',component: DashbordComponent}
  ];

@NgModule({
    declarations: [
        HomeComponent,
        DashbordComponent,
        LoginComponent,
        SignupComponent,
    ],
    imports:[
        BrowserModule,
        RouterModule.forRoot(routes)
         
    ]
})
export class BodyModule {};