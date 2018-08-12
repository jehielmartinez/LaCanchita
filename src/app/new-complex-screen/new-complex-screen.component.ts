import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-new-complex-screen',
  templateUrl: './new-complex-screen.component.html',
  styleUrls: ['./new-complex-screen.component.css']
})
export class NewComplexScreenComponent implements OnInit {
  complexForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createComplexForm();
   }

   createComplexForm() {
    this.complexForm = this.formBuilder.group({
      complexName: '',
      description: '',
      ownerName: '',
      openingHour: '',
      closingHour: '',
      telephone: '',
      address: '',
      city: '',
      country: '',
    });
  }
  onSubmit() {
    // this.menuItem = this.itemForm.value;
    // this.menuItemService.saveMenuItem(this.menuItem);
    this.complexForm.reset();
  }

  ngOnInit() {
  }

}
