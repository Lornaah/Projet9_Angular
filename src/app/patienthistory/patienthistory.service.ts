import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { Note } from '../note/note';
import { PatientHistory } from './patienthistory';

@Injectable({
  providedIn: 'root'
})


export class PatienthistoryService {

  constructor(private http: HttpClient) {

  }

  getPatientHistoryById(id: number): Observable<PatientHistory | undefined> {
    return this.http.get<PatientHistory>(`http://localhost:8080/patient/${id}/patientHistory/get`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))

    );
  }

  getNoteByNoteId(noteId: string): Observable<Note> {
    return this.http.get<Note>(`http://localhost:8081/patHistory?noteId=${noteId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getPatientNote(patientId: number): Observable<Note[]> {
    return this.http.get<Note>(`http://localhost:8081/patHistories?patId=${patientId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addNote(note: Note): Observable<Note> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Note>(`http://localhost:8081/patHistory/add`, note, httpOptions).pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null))
    );
  }

  updateNote(note: Note): Observable<Note> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(`http://localhost:8081/patHistory/update`, note, httpOptions).pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null)),
    );
  }

  deleteNoteById(noteId: string): Observable<null> {
    return this.http.delete(`http://localhost:8081/patHistory/delete?id=${noteId}`).pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null))
    );
  }

  generateDiabetesReport(patientId: number, occurences: number): Observable<string> {
    const options: Object = {
      responseType: 'text'
    }
    return this.http.get<string>(`http://localhost:8080/generateReport?patId=${patientId}&occurrences=${occurences}`, options).pipe(
          tap((response: any) => this.log("generateReport " + response)),
          catchError((error: Error) => this.handleError(error, null))
        );
  }  

  getOccurrencesByPatId(patientId: number): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/getOccurrencesByPatId?patId=${patientId}`).pipe(
      tap((response: any) => this.log(response)),
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
