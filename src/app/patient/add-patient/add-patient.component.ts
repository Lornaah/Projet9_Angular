import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-add-patient',
  template: `
   <h2 class="center">Add a Patient </h2>
   <app-patient-form [patient]="patient"> </app-patient-form>
   
  `
})
export class AddPatientComponent implements OnInit {

  patient: Patient;

  constructor() { }

  ngOnInit() {
    this.patient = new Patient();
  }

}
