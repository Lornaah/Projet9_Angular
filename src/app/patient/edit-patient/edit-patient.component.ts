import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-edit-patient',
  template: `
   <h2 class="center"> Edit {{ patient?.given }} </h2>
   <app-patient-form *ngIf="patient" [patient]="patient"> </app-patient-form>
  `,
})
export class EditPatientComponent implements OnInit {

  patient: Patient | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: PatientService
  ) { }

  ngOnInit(): void {
    const patientId: string | null = this.route.snapshot.paramMap.get('id');
    if (patientId) {
      this.service.getPatientById(+patientId).subscribe(patient => this.patient = patient);
    } else {
      this.patient = undefined;
    }

  }

}
