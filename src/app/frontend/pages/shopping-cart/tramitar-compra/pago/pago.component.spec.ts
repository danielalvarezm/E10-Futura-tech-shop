import { HttpClientModule } from "@angular/common/http";
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { PagoComponent } from './pago.component'

describe("PagoComponent", () => {
    let component: PagoComponent;
    let fixture: ComponentFixture<PagoComponent>;
    let debugE: DebugElement;  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        HttpClientModule,
      ],
      declarations: [PagoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("the component should created correctly.", () => {
    expect(component).toBeTruthy();
  });

  it('there must be a method called codeInfo.', () => {
    let codeInfo = spyOn(component, 'codeInfo')
    component.codeInfo();
    expect(codeInfo).toHaveBeenCalled();
  });

  it('there must be a method called pay.', () => {
    let pay = spyOn(component, 'pay')
    component.pay();
    expect(pay).toHaveBeenCalled();
  });

  it('there must be a method called checkStock.', () => {
    let checkStock = spyOn(component, 'checkStock')
    component.checkStock();
    expect(checkStock).toHaveBeenCalled();
  });


});

