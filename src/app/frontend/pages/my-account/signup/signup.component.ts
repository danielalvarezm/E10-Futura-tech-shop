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

  user = new User("", "", "", "", "", "", false, 0);
  fieldPasswordType: boolean = false;
  fieldConfirmPasswordType: boolean = false;
  emailError = false;
  passwordError = false;
  password_confirmation: any;
  email;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signUp() {
    this.emailError = false;
    this.passwordError = false
    this.authService.getUser(this.user.email)
      .subscribe(res => {
        if (res == null) {
          if(this.password_confirmation == this.user.password){
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
          } else {
            this.passwordError = true;
          }
        } else {
          this.emailError = true;
        }
      }, err => console.log(err));
  }

  toggleFieldPasswordType() {
    this.fieldPasswordType = !this.fieldPasswordType;
  }

  toggleFieldConfirmPasswordType() {
    this.fieldConfirmPasswordType = !this.fieldConfirmPasswordType;
  }
}
