import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../note/note';
import { Patient } from '../patient/patient';
import { PatientService } from '../patient/patient.service';
import { PatientHistory } from './patienthistory';
import { PatienthistoryService } from './patienthistory.service';


@Component({
  selector: 'app-patientHistory',
  templateUrl: './patienthistory.component.html'
})

export class PatienthistoryComponent implements OnInit {

  patient: Patient | undefined;
  patientHistory : PatientHistory | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private patientHistoryService : PatienthistoryService
  ) { }

  ngOnInit() {
    this.getPatientHistory();
  }

  private getPatientHistory(){
    const patientId: string | null = this.route.snapshot.paramMap.get('id');

    if (patientId) {
      this.patientService.getPatientById(+patientId)
        .subscribe(patient => this.patient = patient);
      this.patientHistoryService.getPatientHistoryById(+patientId)
      .subscribe(patientHistory =>{
        if(patientHistory){
        this.patientHistory = patientHistory;
        this.getNote(patientHistory, patientId);
        }
      });     
    }
  }

  private getNote(patientHistory : PatientHistory, patientId : string){
    if(this.patientHistory){
      var patientHistory = this.patientHistory;
      this.patientHistoryService.getPatientNote(+patientId)
      .subscribe(note => {
        patientHistory.note = note
        this.patientHistory = patientHistory;
      }); 
    }
  }

  deleteNote(note : Note){
    this.patientHistoryService.deleteNoteById(note.id).subscribe( () => this.getPatientHistory());
  }

   goToAddNoteForm(){
    this.router.navigate(['/note/add', this.patient?.id]);
  }

  goToDetailsPatient(patient : Patient){
    this.router.navigate(['patient', patient.id])
  }

  goToUpdateNote(note : Note){
    this.router.navigate(['/note/update', note.id]);
  }

  goToGenerateReport(patient : Patient){
    this.router.navigate(['/generateReport', patient.id]);
  }
  
  hasNote():boolean{
    if(this.patientHistory && this.patientHistory.note)
      return this.patientHistory.note.length > 0;
    else
      return false;
}

}
