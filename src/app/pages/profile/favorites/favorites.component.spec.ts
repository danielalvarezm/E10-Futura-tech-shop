import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () => {
    let component: FavoritesComponent;
    let fixture: ComponentFixture<FavoritesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ FavoritesComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FavoritesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('the component should created correctly.', () => {
        expect(component).toBeTruthy();
      });

      it('the component should have a navbar.', () => {
        fixture = TestBed.createComponent(FavoritesComponent);
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('nav')).toBeTruthy();
      });
})