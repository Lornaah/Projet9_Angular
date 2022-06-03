import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html'
})
export class DetailPatientComponent implements OnInit {

  patientList : Patient[];
  patient : Patient|undefined;

  constructor(
    private route:ActivatedRoute, 
    private router: Router,
    private patientService : PatientService
    ) { }

  ngOnInit() {
    const patientId: string|null = this.route.snapshot.paramMap.get('id');
    
    if(patientId){
        this.patientService.getPatientById(+patientId)
        .subscribe(patient => this.patient = patient);
    }
  }

  goToPatientList(){
    this.router.navigate(['/patients']);
  }
  
}
