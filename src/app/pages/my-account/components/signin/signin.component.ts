import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/_models/user';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  user = new User("", "", "", "", "", "", false, "");

  loading = false;
  fieldTextType: boolean = false;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void { }


  signIn() { 
    console.log(this.user);
    this.authService.signInUser(this.user)
    .subscribe(
      res => { 
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}