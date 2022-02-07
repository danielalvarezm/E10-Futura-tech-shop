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

  user = new User("", "", "", "", "", "", false, "");
  loading = false;
  fieldTextType: boolean = false;
  // Error para el login
  error;

  constructor(public authService: AuthService, private router: Router) {}


  signIn() {
    console.log(this.user);
    this.authService.signInUser(this.user)
    .subscribe(
      res => { 
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
        return true;
      },
       err => {
        console.log(err);
        this.error = err;
        return false;
       }
    )
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}