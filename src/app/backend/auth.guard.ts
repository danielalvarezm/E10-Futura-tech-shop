import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    public router: Router
  ) {}
  
  canActivate(): boolean {
    if (this.authService.loggedIn()) return true;
    
    this.router.navigate(['/mi-cuenta']);
    return false;
  }
}
