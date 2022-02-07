import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RelevantCategoriesComponent } from './relevant-categories.component';

describe('RelevantCategoriesComponent', () => {
    let component: RelevantCategoriesComponent;
    let fixture: ComponentFixture<RelevantCategoriesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ RelevantCategoriesComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RelevantCategoriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('the component should created correctly.', () => {
        expect(component).toBeTruthy();
      });
})