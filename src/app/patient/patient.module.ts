import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule, Routes } from '@angular/router';

const patientRoutes: Routes = [
  { path:'patients', component: ListPatientComponent },
  { path:'patient/:id', component : DetailPatientComponent },
];

@NgModule({
  declarations: [
    ListPatientComponent,
    DetailPatientComponent,
    BorderCardDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(patientRoutes)
  ]
})
export class PatientModule { }
