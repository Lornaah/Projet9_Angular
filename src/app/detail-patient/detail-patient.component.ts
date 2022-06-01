import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PATIENTS } from '../mock-patient';
import { Patient } from '../patient';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html'
})
export class DetailPatientComponent implements OnInit {

  patientList : Patient[];
  patient : Patient|undefined;

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.patientList = PATIENTS;
    const patientId: string|null = this.route.snapshot.paramMap.get('id');
    if(patientId){
    this.patient = this.patientList.find(patient => patient.id == +patientId);
    }
  }

  goToPatientList(){
    this.router.navigate(['/patients']);
  }
  
}
