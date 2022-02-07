import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductsInterestComponent } from './products-interest.component';

describe('ProductsInterestComponent', () => {
    let component: ProductsInterestComponent;
    let fixture: ComponentFixture<ProductsInterestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ ProductsInterestComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductsInterestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('the component should created correctly.', () => {
        expect(component).toBeTruthy();
      });
})