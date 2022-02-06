import { Component } from '@angular/core';
import { User } from '../../../_models/user';
import { AuthService } from '../../../services/auth.service';
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
    console.log(this.user);
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/mi-cuenta']);
        },
        err => console.log(err)
      )
  } 

  toggleFieldPasswordType() {
    this.fieldPasswordType = !this.fieldPasswordType;
  }

  toggleFieldConfirmPasswordType() {
    this.fieldConfirmPasswordType = !this.fieldConfirmPasswordType;
  }
}
