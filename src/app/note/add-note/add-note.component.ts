import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';

@Component({
  selector: 'app-add-note',
  template: `

    <h2 class="center">Add a Note </h2>
   <app-note-form [note]="note"> </app-note-form>
  `

})
export class AddNoteComponent implements OnInit {

  note: Note;

  constructor() {
  }

  ngOnInit(): void {
    this.note = new Note();
  }

}
