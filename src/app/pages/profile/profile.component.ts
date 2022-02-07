import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../_models';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  currentUser: User;

  constructor(public authService: AuthService, private router: Router) { }

  logout() {
    this.router.navigate(['../mi-cuenta']);
  }

}
