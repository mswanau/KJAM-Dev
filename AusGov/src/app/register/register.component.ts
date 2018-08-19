import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import { PasswordValidation } from '../password-validation';
import { UserService } from '../user.service';

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

  currentUser: User;
  // tempUser: User;

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private users: UserService
  ) { }



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
          postcode: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          verify: ['', [Validators.required, Validators.minLength(6)]]
      },{
        validator: PasswordValidation.MatchPassword // your validation method
      })
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



    // this.tempUser.id = 111111111, // Placeholder ID
    // this.tempUser.first_name = this.registerForm.value.firstName,
    // this.tempUser.last_name = this.registerForm.value.lastName,
    // this.tempUser.email = this.registerForm.value.email,
    // this.tempUser.password = this.registerForm.value.password,
    // this.tempUser.phone = this.registerForm.value.phone,
    // this.tempUser.address = this.registerForm.value.address,
    // this.tempUser.suburb = this.registerForm.value.suburb,
    // this.tempUser.city = this.registerForm.value.city,
    // this.tempUser.state = this.registerForm.value.state,
    // this.tempUser.postcode = this.registerForm.value.postcode,
    // this.tempUser.birth_date = this.registerForm.value.dob
    

    this.users.registerUser(
      this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.phone,
      this.registerForm.value.address,
      this.registerForm.value.suburb,
      this.registerForm.value.city,
      this.registerForm.value.state,
      this.registerForm.value.postcode,
      this.registerForm.value.dob
    ).subscribe(
      users => {
        this.currentUser = users;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.router.navigate(['/dashboard']);
      }
    )
  }

}