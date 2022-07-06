import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string = this.authService.isLoggedIn ? 'You are already connected' :'You are disconnected';
  errorMessage: string;
  name: string;
  password: string;
  auth: AuthService;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = 'You are connected'
    } else {
      this.message = 'Login or Password incorrect'
    }
  }

  login() {
    this.errorMessage= "";
    this.message = 'Trying to connect...';
    var user = new User(this.name, this.password);
    this.auth.login(user).subscribe(res => {
      this.message = "";
      this.errorMessage = res.message;
    });
  }

  signUp(){
    this.router.navigate(['/signUp']);
  }

  logout() {
    this.auth.doLogout();
    this.message = 'You are disconnected';
  }

}
