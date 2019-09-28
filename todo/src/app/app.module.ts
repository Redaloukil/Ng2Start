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
import { ListReducer , EditReducer } from './reducers/index';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    StoreModule.forRoot({
      ListReducer,
    })
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge:25 ,
      logOnly:true
    })
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // StoreModule.forRoot(reducers, {
    //   metaReducers, 
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true,
    //   }
    // }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
