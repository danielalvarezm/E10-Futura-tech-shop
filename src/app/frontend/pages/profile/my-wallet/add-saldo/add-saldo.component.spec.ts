/*import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AddSaldoComponent } from './add-saldo.component'

describe('AddSaldoComponent', () => {
    let component: AddSaldoComponent;
    let fixture: ComponentFixture<AddSaldoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterTestingModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ AddSaldoComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddSaldoComponent);
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

    it('there must be a method called ingresarSaldo.', () => {
        let ingresarSaldo = spyOn(component, 'ingresarSaldo')
        component.ingresarSaldo();
        expect(ingresarSaldo).toHaveBeenCalled();
    });
  
    it('ingresarSaldo.', () => {
        component.amount = 10;
        expect(component.ingresarSaldo()).toEqual(true);
    });

    it('ingresarSaldo.', () => {
        component.amount = -1;
        expect(component.ingresarSaldo()).toEqual(false);
    });
  

    it('the component should have a navbar.', () => {
        fixture = TestBed.createComponent(AddSaldoComponent);
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('nav')).toBeTruthy();
    });

    it('the component should have a button to delete the new card.', () => {
        const fixture = TestBed.createComponent(AddSaldoComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button').textContent).toContain('ELIMINAR');
    });

})*/
