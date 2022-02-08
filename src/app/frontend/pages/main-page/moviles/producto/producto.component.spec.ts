import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductoComponent } from './producto.component';

describe('ProductoComponent', () => {
    let component: ProductoComponent;
    let fixture: ComponentFixture<ProductoComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [FormsModule, HttpClientModule, RouterTestingModule],
        declarations: [ ProductoComponent ]
      })
      .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ProductoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('the component should created correctly.', () => {
      expect(component).toBeTruthy();
    });

    it('there must be a method called getDetails.', () => {
      let getDetails = spyOn(component, 'getDetails')
      component.getDetails('1');
      expect(getDetails).toHaveBeenCalled();
    });

    it('there must be a method called addProduct.', () => {
      let addProduct = spyOn(component, 'addProduct')
      component.addProduct();
      expect(addProduct).toHaveBeenCalled();
    });

    it('there must be a method called ngOnInit.', () => {
      let ngOnInit = spyOn(component, 'ngOnInit')
      component.ngOnInit();
      expect(ngOnInit).toHaveBeenCalled();
    });

    it('the attributes values are correct.', () => {
      expect(component.amount).toBe(1);
      expect(component.mobiles).not.toBe(null);
    });

    it('should render title in a h3 tag to show the technical characteristics', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h3').textContent).toContain('CARACTERÍSTICAS TÉCNICAS');
    });

    it('there is a field for quantity', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#cantidad')).toBeTruthy();
    });

    it('the field is completed correctly', () => {
      const compiled = fixture.debugElement.nativeElement;
  
      compiled.querySelector('#cantidad').value = "1";
  
      expect(compiled.querySelector('#cantidad').value).toEqual("1");
    });
})