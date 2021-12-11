import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  fieldTextType: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  logIn() {
    console.log(this.user);
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
