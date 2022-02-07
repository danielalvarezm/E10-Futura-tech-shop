import { Component } from '@angular/core';
import { User } from '../../../_models/user';
import { AuthService } from '../../../../backend/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user = new User("", "", "", "", "", "", false, "");
  fieldPasswordType: boolean = false;
  fieldConfirmPasswordType: boolean = false;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signUp() {
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/mi-cuenta']);
        },
        err => {
          console.log(err);
          return false;
         }
      )
  } 

  toggleFieldPasswordType() {
    this.fieldPasswordType = !this.fieldPasswordType;
  }

  toggleFieldConfirmPasswordType() {
    this.fieldConfirmPasswordType = !this.fieldConfirmPasswordType;
  }
}
