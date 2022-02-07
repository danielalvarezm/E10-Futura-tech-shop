import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('there must be a method called canActivate', () => {
    let canActivate = spyOn(guard, 'canActivate');
    guard.canActivate();
    expect(canActivate).toHaveBeenCalled();
  });


  it('canActivate should return true when the session is started', () => {
    localStorage.setItem("token", "tokenPrueba");
    expect(guard.canActivate()).toBeTruthy();
  });

  it('canActivate should return true when the session is started', () => {
    localStorage.removeItem('token');
    expect(guard.canActivate()).toBeFalsy();
  });
});
