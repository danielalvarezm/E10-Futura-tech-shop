import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddCardComponent } from './add-card.component'

describe('AddCardComponent', () => {
    let component: AddCardComponent;
    let fixture: ComponentFixture<AddCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ AddCardComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('the component should created correctly.', () => {
        expect(component).toBeTruthy();
    });

    it('the component should have a navbar.', () => {
        fixture = TestBed.createComponent(AddCardComponent);
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('nav')).toBeTruthy();
    });

    it('the component should have a button to delete the new card.', () => {
        const fixture = TestBed.createComponent(AddCardComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button').textContent).toContain('ELIMINAR');
    });

})