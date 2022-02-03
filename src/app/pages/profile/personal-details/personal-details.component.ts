import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "personal-details",
  templateUrl: "./personal-details.component.html",
  styleUrls: ["./personal-details.component.css"],
})
export class PersonalDetailsComponent {
  accountForm: FormGroup;
  constructor() {}

  // convenience getter for easy access to form fields
  get f() {
    return this.accountForm.controls;
  }
}
