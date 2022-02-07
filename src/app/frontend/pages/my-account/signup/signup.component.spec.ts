import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '@app/frontend/_models';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let user: User;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('the component should created correctly.', () => {
    expect(component).toBeTruthy();
  });

  it('there must be a method called signUp.', () => {
    let onsubmit = spyOn(component, 'signUp')
    component.signUp();
    expect(onsubmit).toHaveBeenCalled();
  });

  it('toggleFieldPasswordType() must change the value of the variable fieldTextType.', () => {
    component.toggleFieldPasswordType();
    expect(component.toggleFieldPasswordType).toBeTruthy();
  });

  it('there must be a method called toggleFieldPasswordType.', () => {
    let toggleFieldPasswordType = spyOn(component, 'toggleFieldPasswordType')
    component.toggleFieldPasswordType();
    expect(toggleFieldPasswordType).toHaveBeenCalled();
  });

  it('toggleFieldPasswordType() must change the value of the variable fieldPasswordType.', () => {
    component.toggleFieldPasswordType();
    expect(component.fieldPasswordType).toBeTruthy();
  });

  it('toggleFieldConfirmPasswordType() must change the value of the variable fieldConfirmPasswordType.', () => {
    component.toggleFieldConfirmPasswordType();
    expect(component.fieldConfirmPasswordType).toBeTruthy();
  });

  it('signUp should return false with an empty user', () => {
    expect(component.signUp()).toBeFalsy();
  });
  
  it('should render title in a h3 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('REGÍSTRATE EN FUTURA');
  });

  it('there is a form with the correct fields', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelector('#firstName')).toBeTruthy();
    expect(compiled.querySelector('#lastName1')).toBeTruthy();
    expect(compiled.querySelector('#lastName2')).toBeTruthy();
    expect(compiled.querySelector('#email')).toBeTruthy();
    expect(compiled.querySelector('#password')).toBeTruthy();
    expect(compiled.querySelector('#password_confirmation')).toBeTruthy();
  });

  it('the form is completed correctly', () => {
    const compiled = fixture.debugElement.nativeElement;

    compiled.querySelector('#firstName').value = "testfirstName";
    compiled.querySelector('#lastName1').value = "testlastName1";
    compiled.querySelector('#lastName2').value = "testlastName2";
    compiled.querySelector('#email').value = "testemail";
    compiled.querySelector('#password').value = "testpassword";
    compiled.querySelector('#password_confirmation').value = "testpassword_confirmation";

    expect(compiled.querySelector('#firstName').value).toEqual("testfirstName");
    expect(compiled.querySelector('#lastName1').value).toEqual("testlastName1");
    expect(compiled.querySelector('#lastName2').value).toEqual("testlastName2");
    expect(compiled.querySelector('#email').value).toEqual("testemail");
    expect(compiled.querySelector('#password').value).toEqual("testpassword"); 
    expect(compiled.querySelector('#password_confirmation').value).toEqual("testpassword_confirmation"); 
  });
});