import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { AuthenticationService } from '../services/auth/authentication.service';
import countries from '../countries';


@Component({
  selector: 'app-new-complex-screen',
  templateUrl: './new-complex-screen.component.html',
  styleUrls: ['./new-complex-screen.component.css']
})
export class NewComplexScreenComponent implements OnInit {
  complexForm: FormGroup;
  complex = {};
  loggedIn = false;
  loggedUser;
  countries: Array<Object> = countries;
  selectedCountry: String;

  constructor(private formBuilder: FormBuilder, private databaseService: DatabaseService, private authService: AuthenticationService) {
    this.createComplexForm();
    this.authService.isLogged()
      .subscribe((result) => {
        if (result && result.uid) {
          this.loggedIn = true;
          this.loggedUser = result.email;
        } else {
          this.loggedIn = false;
        }
      }, (error) => {
        this.loggedIn = false;
      });
  }
  Users = this.authService.getUsersData();

  createComplexForm() {
    this.complexForm = this.formBuilder.group({
      complexName: '',
      fieldNum: '',
      description: '',
      ownerName: '',
      openingHour: '',
      closingHour: '',
      telephone: '',
      address: '',
      city: '',
      country: '',
      imageURL: '',
      createdAt: Date.now().toString(),
      imageName: '',
    });
  }
  onSubmit() {
    this.complexForm.patchValue({ ownerName: this.loggedUser }, { onlySelf: true });
    this.complex = this.complexForm.value;
    this.databaseService.uploadComplex(this.complex);
    this.complexForm.reset();
  }

  ngOnInit() {
  }

}
