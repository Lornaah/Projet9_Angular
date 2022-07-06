import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, Observable, of, tap, throwError } from 'rxjs';
import { User } from './login/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'http://localhost:8083'
  loginUrl:string = this.endpoint + '/login'
  signupUrl:string = this.endpoint + '/user/validate'
  message: string

  constructor(
    private http: HttpClient,
    public router: Router) { }

  
  

  login(user: User) : Observable<any> {
    return this.http.post<User>(`${this.loginUrl}`, user).pipe(
      tap((res:any) => {
        if(res.token)
        localStorage.setItem('access_token', res.token);
      else{
        localStorage.removeItem('access_token');
        this.message = res.message;
      }
      if (this.isLoggedIn) {
        this.router.navigate(['/patients']);
      }
      })
    )
  }

  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/user/validate`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<User>(`${this.signupUrl}`, user, httpOptions).pipe(
      tap((r: any) => {console.log(r)}),
      catchError(this.handleError)
      );
  }

  get isLoggedIn(): boolean {
    if(localStorage.getItem('access_token') == null)
      return false;
    return true;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }
  getToken() {
    return localStorage.getItem('access_token');
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  get errorMessage():string{
    return this.message;
  }
}
