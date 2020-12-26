import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-new-owner",
  templateUrl: "./new-owner.component.html",
  styleUrls: ["./new-owner.component.css"]
})
export class NewOwnerComponent implements OnInit {
  newOwnerForm;

  constructor(private formBuilder: FormBuilder) {
    this.newOwnerForm = this.formBuilder.group({
      name: "",
      surnames: "",
      fiscalCode: "",
      telephone: "",
      email: "",
      address: ""
    });
  }

  ngOnInit() {}

  onSubmit(data) {
    console.log("nombre: " + data.name + " apellidos: " + data.surnames);
  }
}
