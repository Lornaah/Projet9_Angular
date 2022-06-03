import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
})
export class ListPatientComponent implements OnInit {

  patientList:Patient[];

  constructor(
    private router: Router,
    private patientService: PatientService
    ){}

    ngOnInit(){
      this.patientService.getPatientList()
      .subscribe(patientList => this.patientList = patientList)
    }

  goToPatient(patient: Patient){
    this.router.navigate(['/patient', patient.id]);
  }


}
