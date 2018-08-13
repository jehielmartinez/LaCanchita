import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-screen',
  templateUrl: './signin-screen.component.html',
  styleUrls: ['./signin-screen.component.css']
})
export class SigninScreenComponent implements OnInit {
  signinForm: FormGroup;
  user = {};


  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.createUserForm();
  }
  createUserForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password: ['', Validators.required],
    });
  }
  ngOnInit() { }
  onSubmit() {
    this.user = this.signinForm.value;
    this.authService.signin(this.user);
    this.signinForm.reset();
    this.router.navigate(['cards']);

  }

}
