import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
})
export class SimpleFormComponent implements OnInit {
  userForm: any = FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get formValues() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    document.getElementById('result').innerHTML =
      '<pre>' + JSON.stringify(this.userForm.value) + '</pre>';
  }
}
