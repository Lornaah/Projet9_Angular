import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PATIENTS } from '../mock-patient';
import { Patient } from '../patient';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
})
export class ListPatientComponent {

  patientList:Patient[] = PATIENTS;

  constructor(private router: Router) { }

  goToPatient(patient: Patient){
    this.router.navigate(['/patient', patient.id]);
  }


}
