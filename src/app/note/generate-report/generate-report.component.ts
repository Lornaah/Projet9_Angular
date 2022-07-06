import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/patient/patient';
import { PatientService } from 'src/app/patient/patient.service';
import { PatienthistoryService } from 'src/app/patienthistory/patienthistory.service';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html'
})

export class GenerateReportComponent implements OnInit {

  patient: Patient | undefined;
  report: String;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientHistoryService: PatienthistoryService,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.generateReport();
  }

  generateReport() {
    const patientId: string | null = this.route.snapshot.paramMap.get('id');

    if (patientId) {

      this.patientHistoryService.generateDiabetesReport(+patientId).subscribe((report) => {
        this.report = report;

      })
      this.patientService.getPatientById(+patientId)
        .subscribe(patient => this.patient = patient);
    }

  }

  goToPatientHistory(patient: Patient) {
    this.router.navigate(['patient', patient.id, 'patientHistory']);
  }

}
