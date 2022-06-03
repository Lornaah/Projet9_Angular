import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private http: HttpClient) {

  }

  getPatientList(): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:8080/patients').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPatientById(patientId: number): Observable<Patient | undefined> {
    return this.http.get<Patient>(`http://localhost:8080/patient/get?id=${patientId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: Patient[]|Patient|undefined){
    console.table(response);
  }

  private handleError(error: Error, errorValue : any){
    console.error(error);
    return of(errorValue);
  }

}