import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private http: HttpClient) {

  }

  getPatientList(): Observable<Patient[]> {
    return this.http.get<Patient[]>(environment.mediscreenUrl + '/patients').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPatientById(patientId: number): Observable<Patient | undefined> {
    return this.http.get<Patient>(environment.mediscreenUrl + `/patient/get?id=${patientId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updatePatient(patient: Patient): Observable<Patient> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(environment.mediscreenUrl + `/patient/update?id=${patient.id}`, patient, httpOptions).pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null)),
    );
  }

  deletePatientById(patientId: number): Observable<null>{
    return this.http.delete(environment.mediscreenUrl + `/patient/delete?id=${patientId}`).pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null))
    );
  }

  addPatient(patient : Patient): Observable<Patient>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Patient>(environment.mediscreenUrl + `/patient/add`, patient, httpOptions).pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null))
    );
  }

  private log(response: any) {
    //console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}