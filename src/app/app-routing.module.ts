import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';

const routes: Routes = [
  { path:'patients', component: ListPatientComponent },
  { path:'patient/:id', component : DetailPatientComponent },
  { path : '', redirectTo: 'patients', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
