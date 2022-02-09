import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyOrdersComponent } from './my-orders.component'

describe('MyOrdersComponent', () => {
    let component: MyOrdersComponent;
    let fixture: ComponentFixture<MyOrdersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ MyOrdersComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MyOrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('the component should created correctly.', () => {
        expect(component).toBeTruthy();
      });

      it('the component should have a navbar.', () => {
        fixture = TestBed.createComponent(MyOrdersComponent);
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('nav')).toBeTruthy();
      });

        it('the component should have a button to see the details.', () => {
        const fixture = TestBed.createComponent(MyOrdersComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button').textContent).toContain('Ver Detalles');
        });
})
