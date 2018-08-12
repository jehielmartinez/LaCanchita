import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin-screen',
  templateUrl: './signin-screen.component.html',
  styleUrls: ['./signin-screen.component.css']
})
export class SigninScreenComponent implements OnInit {
  signinForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.createUserForm();
   }
   createUserForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {}
  onSubmit() {
    // this.user = this.signinForm.value;
    // this.authService.signin(this.user);
    this.signinForm.reset();
  }

}
