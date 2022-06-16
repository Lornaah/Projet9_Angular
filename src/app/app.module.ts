import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientModule } from './patient/patient.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatienthistoryComponent } from './patienthistory/patienthistory.component';
import { AddNoteComponent } from './note/add-note/add-note.component';
import { NoteFormComponent } from './note/note-form/note-form.component';
import { UpdateNoteComponent } from './note/update-note/update-note.component';
import { GenerateReportComponent } from './note/generate-report/generate-report.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PatienthistoryComponent,
    AddNoteComponent,
    NoteFormComponent,
    UpdateNoteComponent,
    GenerateReportComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PatientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
