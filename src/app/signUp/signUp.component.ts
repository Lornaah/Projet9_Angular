import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { User } from "../login/user";

@Component({
    selector: 'app-signUp',
    templateUrl: './signUp.component.html',
    styles: [
    ]
  })

  export class SignUpComponent implements OnInit {
   @Input() user: User ;
   error: boolean;

   constructor(
    private authService : AuthService,
    private router : Router,
   ) {}

    ngOnInit(): void {
        this.user = new User('','');
    }

    signUp(){
        this.authService.signUp(this.user).subscribe({
            complete:() => {this.router.navigate(['/']);},
            error:() => {this.error = true;}
        }
        );
    }

    back(){
        this.router.navigate(['/login'])
    }
    
  }