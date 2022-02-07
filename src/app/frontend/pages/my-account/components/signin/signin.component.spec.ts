import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing'

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
  
  it('toggleFieldTextType() must change the value of the variable fieldTextType.', () => {
    component.toggleFieldTextType();
    expect(component.fieldTextType).toBeTruthy();
  });

  it('there must be a method called signIn.', () => {
    let onsubmit = spyOn(component, 'signIn')
    component.signIn();
    expect(onsubmit).toHaveBeenCalled();
  });

  it('there must be a method called toggleFieldTextType.', () => {
    let toggleFieldTextType = spyOn(component, 'toggleFieldTextType')
    component.toggleFieldTextType();
    expect(toggleFieldTextType).toHaveBeenCalled();
  });
  
  it('should render title in a h4 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('INICIO DE SESIÓN');
  });
  
  it('signIn should return false with a nonexistent user', () => {
    expect(component.signIn()).toBeFalsy();
  });
});