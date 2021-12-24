import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  fieldPasswordType: boolean = false;
  fieldConfirmPasswordType: boolean = false;

  constructor() { }

  signUp() {
    
  }

  toggleFieldPasswordType() {
    this.fieldPasswordType = !this.fieldPasswordType;
  }

  toggleFieldConfirmPasswordType() {
    this.fieldConfirmPasswordType = !this.fieldConfirmPasswordType;
  }
}
