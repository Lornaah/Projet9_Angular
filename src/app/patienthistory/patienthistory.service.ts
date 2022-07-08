import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { environment } from 'src/environments/environment';
import { Note } from '../note/note';
import { PatientHistory } from './patienthistory';

@Injectable({
  providedIn: 'root'
})


export class PatienthistoryService {

  constructor(private http: HttpClient) {

  }

  getPatientHistoryById(id: number): Observable<PatientHistory | undefined> {
    return this.http.get<PatientHistory>(environment.mediscreenUrl + `/patient/${id}/patientHistory/get`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))

    );
  }

  getNoteByNoteId(noteId: string): Observable<Note> {
    return this.http.get<Note>(environment.noteUrl + `/patHistory?noteId=${noteId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getPatientNote(patientId: number): Observable<Note[]> {
    return this.http.get<Note>(environment.noteUrl + `/patHistories?patId=${patientId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addNote(note: Note): Observable<Note> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Note>(environment.noteUrl + `/patHistory/add`, note, httpOptions).pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null))
    );
  }

  updateNote(note: Note): Observable<Note> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(environment.noteUrl + `/patHistory/update`, note, httpOptions).pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null)),
    );
  }

  deleteNoteById(noteId: string): Observable<null> {
    return this.http.delete(environment.noteUrl + `/patHistory/delete?id=${noteId}`).pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null))
    );
  }

  generateDiabetesReport(patientId: number): Observable<string> {
    const options: Object = {
      responseType: 'text'
    }
    return this.http.get<string>(environment.reportUrl + `/assess?patId=${patientId}`, options).pipe(
          tap((response: any) => this.log("generateReport " + response)),
          catchError((error: Error) => this.handleError(error, null))
        );
  }  


  private log(response: any) {
    console.table(response);
  }
  

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}
