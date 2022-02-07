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

  it('toggleFieldPasswordType() must change the value of the variable fieldTextType.', () => {
    component.toggleFieldPasswordType();
    expect(component.toggleFieldPasswordType).toBeTruthy();
  });

  it('there must be a method called signUp.', () => {
    let onsubmit = spyOn(component, 'signUp')
    component.signUp();
    expect(onsubmit).toHaveBeenCalled();
  });

  it('there must be a method called toggleFieldPasswordType.', () => {
    let toggleFieldPasswordType = spyOn(component, 'toggleFieldPasswordType')
    component.toggleFieldPasswordType();
    expect(toggleFieldPasswordType).toHaveBeenCalled();
  });
  
  it('should render title in a h3 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('REGÍSTRATE EN FUTURA');
  });
});