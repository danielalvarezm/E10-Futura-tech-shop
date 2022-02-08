import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '@app/frontend/_models';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let user: User;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(AuthService);
    localStorage.setItem("token", "tokenTest");
  });

  afterEach(() => {
    localStorage.removeItem('token');
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('there must be a method called signUpUser', () => {
    user = new User("", "test@gmail.com", "testpwd", "testname", "testlastnam1", "testlastname2", false, 0);
    let signUpUser = spyOn(service, 'signUpUser');
    service.signUpUser(user);
    expect(signUpUser).toHaveBeenCalled();
  });

  it('there must be a method called signInUser', () => {
    user = new User("", "test@gmail.com", "testpwd", "", "", "", false, 0);
    let signInUser = spyOn(service, 'signInUser');
    service.signInUser(user);
    expect(signInUser).toHaveBeenCalled();
  });

  it('loggedIn() should return true if the user is logged in', () => {
    expect(service.loggedIn()).toBeTruthy();
  });

  it('loggedIn() should return false if the user is not logged in', () => {
    localStorage.removeItem('token');
    expect(service.loggedIn()).toBeFalsy();
  });

  it('logout() should return false if the user is not logged in', () => {
    service.logout()
    expect(localStorage.getItem('token')).toEqual(null);
  });

  it('getToken() should return the locally stored token', () => {
    expect(service.getToken()).toEqual("tokenTest");
  });
});
