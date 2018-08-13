import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  stepOne = true;
  stepTwo = false;
  stepThree = false;
  stepFour = false;

  constructor( private formBuilder: FormBuilder,
    private router: Router) { }



    ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', Validators.required],
          dob: ['', Validators.required],
          address: ['', Validators.required],
          suburb: ['', Validators.required],
          city: ['', Validators.required],
          postcode: ['', Validators.required]
      });
  }

  get f() { return this.registerForm.controls; }

  exitRegister() {
    this.router.navigate(['/login']);
  }

  onSubmitStepOne() {
    this.stepOne = true;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepFour = false;
  }

  onSubmitStepTwoValidate() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.submitted = false;
      this.stepOne = false;
      this.stepTwo = true;
      this.stepThree = false;
      this.stepFour = false;
    }
  }

  onSubmitStepTwo() {
    this.stepOne = false;
    this.stepTwo = true;
    this.stepThree = false;
    this.stepFour = false;
  }

  onSubmitStepThree() {
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = true;
    this.stepFour = false;
  }

  onSubmitStepFour() {
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepFour = true;
  }

  onSubmit() {
    this.submitted = true;
 
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert('UNSUCCESSFUL!! :-)')
        return;
    }

    alert('SUCCESS!! :-)'  + JSON.stringify(this.registerForm.value));
    this.router.navigate(['/login']);
  }

}
