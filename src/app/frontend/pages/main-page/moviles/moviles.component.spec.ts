import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MovilesComponent } from './moviles.component';

describe('MovilesComponent', () => {
    let component: MovilesComponent;
    let fixture: ComponentFixture<MovilesComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
        declarations: [ MovilesComponent ]
      })
      .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(MovilesComponent);
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
      expect(component.mobiles).not.toBe(null);
    });

    it('should render title in a h4 tag to show all smartphones', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h4').textContent).toContain(' LOS SMARTPHONES');
    });
})