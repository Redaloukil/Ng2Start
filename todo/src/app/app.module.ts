import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { StoreModule, Store } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EditReducer , ListReducer, reducers} from './reducers/index';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './edit/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
    }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
