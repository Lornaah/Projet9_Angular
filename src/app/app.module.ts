import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientModule } from './patient/patient.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PatientModule,
    AppRoutingModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
