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

const patientRoutes: Routes = [
  { path:'edit/patient/:id', component : EditPatientComponent},
  { path:'patient/add', component : AddPatientComponent},
  { path:'patients', component: ListPatientComponent },
  { path:'patient/:id', component : DetailPatientComponent },
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
