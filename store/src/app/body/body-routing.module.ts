import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';


const routes: Routes = [
  {path:'/' , component : HomeComponent },
  {path:'/dashbord',component: DashbordComponent},
  {path:'/login',component: LoginComponent},
  {path:'/signup',component: DashbordComponent}
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BodyRoutingModule { }