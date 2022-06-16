import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { PatienthistoryService } from 'src/app/patienthistory/patienthistory.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html'
})

export class NoteFormComponent implements OnInit {
  @Input() note: Note;
  isAddForm: boolean;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private patientHistoryService : PatienthistoryService,
    private router : Router
  ) { }

  ngOnInit() {
    const patientId: string | null = this.route.snapshot.paramMap.get('id');
    if(patientId)
    this.note.patientId = +patientId;
    this.isAddForm = this.router.url.includes('add');
  }

  onSubmit(form: NgForm) {
    if (this.isAddForm) {
      this.patientHistoryService.addNote(this.note)
        .subscribe((note: Note) => this.goToPatientHistory())
    } 
     else {
      this.patientHistoryService.updateNote(this.note)
        .subscribe((note) => {
          if (note) {
            this.goToPatientHistory();
          }
        })
    }  
  }

 goToPatientHistory(){
   console.log(this.note);
    this.router.navigate(['/patient', this.note.patientId, 'patientHistory']);
    
  }

}
