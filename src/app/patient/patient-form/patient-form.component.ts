import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
})
export class PatientFormComponent implements OnInit {
  @Input() patient: Patient;
  types: string[];
  isAddForm: boolean;

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
  }

  onSubmit() {
    if (this.isAddForm) {
      this.patientService.addPatient(this.patient)
        .subscribe((patient: Patient) => this.router.navigate(['/patient', patient.id]))
    } else {
      this.patientService.updatePatient(this.patient)
        .subscribe((patient) => {
          if (patient) {
            this.router.navigate(['/patient', this.patient.id]);
          }
        })
    }
  }

  goToPatientList() {
    this.router.navigate(['/patients']);
  }
}

