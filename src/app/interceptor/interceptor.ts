import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { catchError, EMPTY, lastValueFrom, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth.service";

@Injectable()
export class Interceptor implements HttpInterceptor{
    verifyUrl:string = environment.loginUrl + '/verify';

    constructor(
        private authService:AuthService,
        private http: HttpClient
        ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if([this.authService.signupUrl, this.authService.loginUrl].includes(req.url))
            return next.handle(req)
        var token = this.authService.getToken();
        if(token == null)
            return EMPTY;
        return next.handle(req);
    }
}