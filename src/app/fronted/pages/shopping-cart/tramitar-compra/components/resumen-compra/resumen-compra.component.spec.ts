import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ResumenCompraComponent } from './resumen-compra.component'

describe("ResumenCompraComponent", () => {
  let component: ResumenCompraComponent;
  let fixture: ComponentFixture<ResumenCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        HttpClientModule,
      ],
      declarations: [ResumenCompraComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("the component should created correctly.", () => {
    expect(component).toBeTruthy();
  });

  it("the component should have a button to modify the orders.", () => {
    const fixture = TestBed.createComponent(ResumenCompraComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("a").textContent).toContain(
      "MODIFICAR"
    );
  });
});
