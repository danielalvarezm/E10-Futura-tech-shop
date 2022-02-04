import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PersonalDetailsComponent } from "./personal-details.component";

describe("PersonalDetailsComponent", () => {
  let component: PersonalDetailsComponent;
  let fixture: ComponentFixture<PersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        HttpClientModule,
      ],
      declarations: [PersonalDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("the component should created correctly.", () => {
    expect(component).toBeTruthy();
  });

  it("the component should have a form.", () => {
    expect(component.accountForm).toBeUndefined();
  });

  it("the component should have a navbar.", () => {
    fixture = TestBed.createComponent(PersonalDetailsComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("nav")).toBeTruthy();
  });

  it("the component should have a button to save all the changes.", () => {
    const fixture = TestBed.createComponent(PersonalDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("button").textContent).toContain(
      "GUARDAR CAMBIOS"
    );
  });
});