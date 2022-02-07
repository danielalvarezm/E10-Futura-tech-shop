import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { DatosPersonalesComponent } from './datos-personales.component'

describe("DatosPersonalesComponent", () => {
  let component: DatosPersonalesComponent;
  let fixture: ComponentFixture<DatosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        HttpClientModule,
      ],
      declarations: [DatosPersonalesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("the component should created correctly.", () => {
    expect(component).toBeTruthy();
  });

  it("the component should have a button to modify the personal details.", () => {
    const fixture = TestBed.createComponent(DatosPersonalesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("button").textContent).toContain(
      "MODIFICAR"
    );
  });
});
