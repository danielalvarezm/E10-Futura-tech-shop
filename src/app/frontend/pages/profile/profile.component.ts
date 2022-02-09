import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../_models';

import {AuthService} from '../../../backend/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  currentUser: User;
  userEmail:any;
  firstName:any;
  lastName1:any;
  lastName2:any;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('email');
    this.authService.getUser(localStorage.getItem('email'))
    .subscribe(res => {
      this.firstName = res.firstName;
      this.lastName1 = res.lastName1;
      this.lastName2 = res.lastName2;
    })
  }

  logout() {
    this.router.navigate(['../mi-cuenta']);
  }

}
