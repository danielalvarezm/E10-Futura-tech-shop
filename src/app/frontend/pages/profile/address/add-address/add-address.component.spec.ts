import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddAddressComponent } from './add-address.component';

describe('AddAddressComponent', () => {
    let component: AddAddressComponent;
    let fixture: ComponentFixture<AddAddressComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ AddAddressComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('the component should created correctly.', () => {
        expect(component).toBeTruthy();
      });

      it('the component should have a navbar.', () => {
        fixture = TestBed.createComponent(AddAddressComponent);
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('nav')).toBeTruthy();
      });

      it('the component should have a button to save the new address.', () => {
        const fixture = TestBed.createComponent(AddAddressComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button').textContent).toContain('GUARDAR DIRECCIÓN');
      });
})