import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyWalletComponent } from './my-wallet.component';

describe('MyWalletComponent', () => {
    let component: MyWalletComponent;
    let fixture: ComponentFixture<MyWalletComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ MyWalletComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MyWalletComponent);
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
        expect(component.saldoUsuario).not.toBe(null);
        expect(component.userName).not.toBe(null);
      });

      it('the component should have a navbar.', () => {
        fixture = TestBed.createComponent(MyWalletComponent);
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('nav')).toBeTruthy();
      });

      it('the component should have a button to add a new card.', () => {
        const fixture = TestBed.createComponent(MyWalletComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button').textContent).toContain('AÑADIR SALDO');
      });
})