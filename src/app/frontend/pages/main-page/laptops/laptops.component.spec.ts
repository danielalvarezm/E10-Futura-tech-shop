import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LaptopsComponent } from './laptops.component';

describe('LaptopsComponent', () => {
    let component: LaptopsComponent;
    let fixture: ComponentFixture<LaptopsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ LaptopsComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LaptopsComponent);
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

      /*it('the attributes values are correct.', () => {
        expect(component.laptops.length).not.toEqual(0);
      });*/

      it('should render title in a h4 tag to show all smartphones', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h4').textContent).toContain('TODOS LOS PORTÁTILES');
      });
})