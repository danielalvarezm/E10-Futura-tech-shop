import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/frontend/_models/user';
import { AuthService } from '../../../../../backend/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  user = new User("", "", "", "", "", "", false, 0);
  loading = false;
  fieldTextType: boolean = false;
  // Error para el login
  error;

  constructor(public authService: AuthService, private router: Router) {}


  signIn() {
    this.authService.signInUser(this.user).subscribe(
      res => { 
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', this.user.email);
        this.router.navigate(['/']);
      }, err => {  this.error = err; })
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}