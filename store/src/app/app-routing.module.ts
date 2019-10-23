import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { Authenticated } from './guards/authentication';


const routes: Routes = [
  { path:'' , component:HomeComponent},
  { path:'login' , component:LoginComponent},
  { path:'signup' , component:SignupComponent},
  { path:'dashbord' , component:DashbordComponent,canActivate:[Authenticated]},
  { path: '**', component: PagenotfoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { };
