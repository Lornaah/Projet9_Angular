import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, Observable, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './login/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loginUrl:string = environment.loginUrl + '/login'
  signupUrl:string = environment.loginUrl + '/user/validate'
  verifyUrl:string = environment.loginUrl + '/verifyToken'
  message: string

  constructor(
    private http: HttpClient,
    public router: Router) { }

  login(user: User) : Observable<any> {
    return this.http.post<User>(`${this.loginUrl}`, user).pipe(
      tap((res:any) => {
        if(res.token){
          localStorage.setItem('access_token', res.token);
          localStorage.setItem('userId', res.userId);
        }
        else{
          localStorage.removeItem('access_token');
          localStorage.removeItem('userId');
          this.message = res.message;
        }
        if (this.isLoggedIn) {
          this.router.navigate(['/patients']);
        }
      })
    )
  }

  signUp(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<User>(`${this.signupUrl}`, user, httpOptions).pipe(
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
    localStorage.removeItem('userId');
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getUserId(){
    return localStorage.getItem('userId');
  }

  verifyToken(){
    const userId = this.getUserId() || '';
    const httpOptions = {
      headers: new HttpHeaders().set('Authorization','Bearer ' + this.getToken()).set('userId', userId)
    };
    return this.http.get<HttpResponse<String>>(`${this.verifyUrl}`+ '?token=' + this.getToken(), httpOptions);
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
