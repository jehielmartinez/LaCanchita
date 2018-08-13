import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/auth/authentication.service';


@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {
  signupForm: FormGroup;
  user = {};

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService) {
    this.createUserForm();
  }
  createUserForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      type: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password: ['', Validators.required],
      createdAt: Date.now().toString()
    });
  }
  ngOnInit() { }
  onSubmit() {
    this.user = this.signupForm.value;
    this.authService.signup(this.user);
    this.signupForm.reset();
  }

}
