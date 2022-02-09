import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyAddressComponent } from './my-address.component';

describe('MyAddressComponent', () => {
    let component: MyAddressComponent;
    let fixture: ComponentFixture<MyAddressComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ MyAddressComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MyAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('the component should created correctly.', () => {
        expect(component).toBeTruthy();
      });

      it('there must be a method called ngOnInit.', () => {
        let ngOnInit = spyOn(component, 'ngOnInit')
        component.ngOnInit();
        expect(ngOnInit).toHaveBeenCalled();
      });  

      it('the attributes values are correct.', () => {
        expect(component.userName).toEqual(undefined);
      });

      it('the component should have a navbar.', () => {
        fixture = TestBed.createComponent(MyAddressComponent);
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('nav')).toBeTruthy();
      });

      it('the component should have a button to add a new address.', () => {
        const fixture = TestBed.createComponent(MyAddressComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button').textContent).toContain('AÑADIR NUEVA DIRECCION');
      });
})