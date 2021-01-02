import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    this.signupForm = this.formBuilder.group({
      email: "",
      password: ""
    });
  }

  ngOnInit(): void { }

  signup(data) {
    this.auth.signup(data.email, data.password);
  }

}
