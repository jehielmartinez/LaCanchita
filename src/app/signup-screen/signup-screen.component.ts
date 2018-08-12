import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {
  signupForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.createUserForm();
   }
   createUserForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      type: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {}
  onSubmit() {
    // this.user = this.signinForm.value;
    // this.authService.signin(this.user);
    this.signupForm.reset();
  }

}
