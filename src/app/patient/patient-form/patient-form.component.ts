import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import * as M from "materialize-css";

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html'
})

export class PatientFormComponent implements OnInit {
  @Input() patient: Patient;
  isAddForm: boolean;

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
  }

  ngAfterViewInit():void{
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {}); 
    instances[0].input.setAttribute("style", "font-size: 20px; padding-left: 20px; box-sizing: border-box;");
    if(!this.isAddForm)
      instances[0].input.value = this.patient.sex;
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

