import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [ SigninComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('the component should created correctly.', () => {
    expect(component).toBeTruthy();
  });

  it('there must be a method called signIn.', () => {
    let onsubmit = spyOn(component, 'signIn')
    component.signIn();
    expect(onsubmit).toHaveBeenCalled();
  });

  it('there must be a method called toggleFieldTextType', () => {
    let toggleFieldTextType = spyOn(component, 'toggleFieldTextType')
    component.toggleFieldTextType();
    expect(toggleFieldTextType).toHaveBeenCalled();
  });
  
  it('toggleFieldTextType() must change the value of the variable fieldTextTyp.', () => {
    component.toggleFieldTextType();
    expect(component.fieldTextType).toBeTruthy();
  });

  it('loading attribute should be false.', () => {
    expect(component.loading).toBeFalsy();
  });

  it('signIn should return false with a nonexistent user', () => {
    expect(component.signIn()).toBeFalsy();
  });

  it('should render title in a h4 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('INICIO DE SESIÓN');
  });

  it('there is a form with the correct fields', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelector('#email')).toBeTruthy();
    expect(compiled.querySelector('#password')).toBeTruthy();
  });

  it('the form is completed correctly', () => {
    const compiled = fixture.debugElement.nativeElement;

    compiled.querySelector('#email').value = "testemail";
    compiled.querySelector('#password').value = "testpassword";

    expect(compiled.querySelector('#email').value).toEqual("testemail");
    expect(compiled.querySelector('#password').value).toEqual("testpassword");  
  });
});