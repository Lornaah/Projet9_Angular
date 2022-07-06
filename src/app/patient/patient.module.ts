import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatienthistoryComponent } from '../patienthistory/patienthistory.component';
import { AddNoteComponent } from '../note/add-note/add-note.component';
import { UpdateNoteComponent } from '../note/update-note/update-note.component';
import { GenerateReportComponent } from '../note/generate-report/generate-report.component';
import { AuthGuard } from '../auth.guard';

const patientRoutes: Routes = [
  { path:'patient/:id/patientHistory', component : PatienthistoryComponent, canActivate: [AuthGuard]},
  { path:'generateReport/:id', component : GenerateReportComponent, canActivate: [AuthGuard]},
  { path:'note/update/:noteId', component : UpdateNoteComponent, canActivate: [AuthGuard]},
  { path:'note/add/:id', component : AddNoteComponent, canActivate: [AuthGuard]},
  { path:'edit/patient/:id', component : EditPatientComponent, canActivate: [AuthGuard]},
  { path:'patient/add', component : AddPatientComponent, canActivate: [AuthGuard]},
  { path:'patients', component: ListPatientComponent, canActivate: [AuthGuard] },
  { path:'patient/:id', component : DetailPatientComponent , canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    ListPatientComponent,
    DetailPatientComponent,
    BorderCardDirective,
    PatientFormComponent,
    EditPatientComponent,
    AddPatientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(patientRoutes)
  ]
})
export class PatientModule { }
