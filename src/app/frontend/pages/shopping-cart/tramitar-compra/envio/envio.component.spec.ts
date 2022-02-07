import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { EnvioComponent } from './envio.component';

describe("EnvioComponent", () => {
  let component: EnvioComponent;
  let fixture: ComponentFixture<EnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        HttpClientModule,
      ],
      declarations: [EnvioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("the component should created correctly.", () => {
    expect(component).toBeTruthy();
  });

  it("the component should have a button to modify the address.", () => {
    const fixture = TestBed.createComponent(EnvioComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("button").textContent).toContain(
      "MODIFICAR"
    );
  });
});
