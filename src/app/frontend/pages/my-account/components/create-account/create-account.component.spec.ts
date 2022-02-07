import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CreateAccountComponent } from './create-account.component';

describe ('CreateAccountComponent', () => {
    let component: CreateAccountComponent;
    let fixture: ComponentFixture<CreateAccountComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ CreateAccountComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(CreateAccountComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('the component should created correctly.', () => {
      expect(component).toBeTruthy();
    });
    
    it('the component should have a button to access to another component.', () => {
        fixture = TestBed.createComponent(CreateAccountComponent);
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button')).toBeTruthy();
    });

    it('the component should have a div with register id.', () => {
        fixture = TestBed.createComponent(CreateAccountComponent);
        const compiled = fixture.debugElement.nativeElement;
        expect(document.getElementById('register')).toBeTruthy();
    })
})