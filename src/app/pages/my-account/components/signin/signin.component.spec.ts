import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
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

  it('the component should have a form.', () => {
    expect(component.signInForm).toBeTruthy();
  });

  it('toggleFieldTextType() must change the value of the variable fieldTextType.', () => {
    component.toggleFieldTextType();
    expect(component.fieldTextType).toBeTruthy();
  });

  it('the component should have a returnUrl variable.', () => {
    expect(component.returnUrl).toEqual('/');
  });

  it('there must be a method called onSubmit.', () => {
    let onsubmit = spyOn(component, 'onSubmit')
    component.onSubmit();
    expect(onsubmit).toHaveBeenCalled();
  });
});
