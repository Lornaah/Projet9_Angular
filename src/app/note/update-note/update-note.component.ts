import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatienthistoryService } from 'src/app/patienthistory/patienthistory.service';
import { Note } from '../note';

@Component({
  selector: 'app-update-note',

 template: `
    <h2 class="center">Change a Note </h2>
   <app-note-form *ngIf="note" [note]="note"> </app-note-form>
  `,

})
export class UpdateNoteComponent implements OnInit {

  note : Note | undefined;

  constructor(
    private route: ActivatedRoute,
    private service : PatienthistoryService
  ) { }

  ngOnInit(): void {
    const noteId : string | null = this.route.snapshot.paramMap.get('noteId');
    if(noteId){
      this.service.getNoteByNoteId(noteId).subscribe(note => this.note =  note);
    } else {
      this.note = undefined;
    }
  }

}
