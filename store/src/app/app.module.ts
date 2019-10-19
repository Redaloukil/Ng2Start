import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';  

// Material Angular
import { 
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule, 
} from '@angular/material';
import { BodyModule } from './body/body.module';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [
    
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
