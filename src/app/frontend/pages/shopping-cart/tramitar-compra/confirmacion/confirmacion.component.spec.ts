/*import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { ConfirmacionComponent } from './confirmacion.component';

describe("ConfirmacionComponent", () => {
  let component: ConfirmacionComponent;
  let fixture: ComponentFixture<ConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ConfirmacionComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("the component should created correctly.", () => {
    expect(component).toBeTruthy();
  });

  it('there must be a method called ngOnInit.', () => {
    let ngOnInit = spyOn(component, 'ngOnInit')
    component.ngOnInit();
    expect(ngOnInit).toHaveBeenCalled();
  });

  it('there must be a method called clearCart.', () => {
    let clearCart = spyOn(component, 'clearCart')
    component.clearCart();
    expect(clearCart).toHaveBeenCalled();
  });

  it('the attributes values are correct.', () => {
    expect(component.myDate).not.toEqual(null);
    expect(component.entrega).not.toEqual(null);
    expect(component.pedido).not.toEqual(null);
    expect(component.total).not.toEqual(null);
    expect(component.products).not.toEqual(null);
    expect(component.size).toEqual(0);
  });

  it("the component should have a button to go back to main page.", () => {
    const fixture = TestBed.createComponent(ConfirmacionComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("button").textContent).toContain(
      "VOLVER AL INICIO"
    );
  });
});
*/