import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, BorderCardDirective, ListPatientComponent, DetailPatientComponent],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
