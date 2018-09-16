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
  stepFive = false;
  stepSix = false;
  uni = true;
  otherAccounts = true;
  uniMessage = false;
  otherAccountsMessage = false;
  identityButtons = true;
  webcam = false;
  goInOffice = false;
  needInputs = false;
  uniDetails = true;
  parentDetails = true;

  currentUser: User;

  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  address = '';
  suburb = '';
  city = '';
  postcode = '';
  dob = '';
  guardian1 = '';
  guardian2 = '';
  partnerId = '';
  studentID = '';
  institute = '';
  workHours = '';
  workIncome = '';
  rent1 = '';
  rent2 = '';

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
          verify: ['', [Validators.required, Validators.minLength(6)]],
          guardian1: [''],
          guardian2: [''],
          partnerId: [''],
          studentID: [''],
          institute: [''],
          workHours: [''],
          workIncome: [''],
          rent1: [''],
          rent2: ['']

      },{
        validator: PasswordValidation.MatchPassword // your validation method
      })
  }

  get f() { return this.registerForm.controls; }

  exitRegister() {
    this.router.navigate(['/login']);
  }

  goStepOne() {
    if (this.registerForm.invalid) {
      this.submitted = true;
      this.stepOne = true;
      this.stepTwo = false;
      this.stepThree = false;
      this.stepFour = false;
      this.stepFive = false;
      this.needInputs = true;
      return;
    } else {
    this.stepOne = true;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepFour = false;
    this.stepFive = false;
  }
}


  goStepTwo() {
    if (this.registerForm.invalid) {
      this.submitted = true;
      this.stepOne = true;
      this.stepTwo = false;
      this.stepThree = false;
      this.stepFour = false;
      this.stepFive = false;
      this.needInputs = true;
      return;
    } else {
    this.stepOne = false;
    this.stepTwo = true;
    this.stepThree = false;
    this.stepFour = false;
    this.stepFive = false;
  }
}

  goStepThree() {
    if (this.registerForm.invalid) {
      this.submitted = true;
      this.stepOne = true;
      this.stepTwo = false;
      this.stepThree = false;
      this.stepFour = false;
      this.stepFive = false;
      this.needInputs = true;
      return;
    } else {
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = true;
    this.stepFour = false;
    this.stepFive = false;
  }
}

  goStepFour() {
    if (this.registerForm.invalid) {
      this.submitted = true;
      this.stepOne = true;
      this.stepTwo = false;
      this.stepThree = false;
      this.stepFour = false;
      this.stepFive = false;
      this.needInputs = true;
      return;
    } else {
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepFour = true;
    this.stepFive = false;
  }
}

  goStepFive() {
    if (this.registerForm.invalid) {
      this.submitted = true;
      this.stepOne = true;
      this.stepTwo = false;
      this.stepThree = false;
      this.stepFour = false;
      this.stepFive = false;
      this.needInputs = true;
      return;
    } else {
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepFour = false;
    this.stepFive = true;

    this.firstName = this.registerForm.value.firstName;
    this.lastName = this.registerForm.value.lastName;
    this.email = this.registerForm.value.email;
    this.phone = this.registerForm.value.phone;
    this.address = this.registerForm.value.address;
    this.suburb = this.registerForm.value.suburb;
    this.city = this.registerForm.value.city;
    this.postcode = this.registerForm.value.postcode;
    this.dob = this.registerForm.value.dob;
    this.rent1 = this.registerForm.value.rent1;
    this.rent2 = this.registerForm.value.rent2;
    this.workHours = this.registerForm.value.workHours;
    this.workIncome = this.registerForm.value.workIncome;
    this.institute = this.registerForm.value.institute;
    this.studentID = this.registerForm.value.studentID;
    this.guardian1 = this.registerForm.value.guardian1;
    this.guardian2 = this.registerForm.value.guardian2;
    this.partnerId = this.registerForm.value.partnerId;
  }
}

  uniRemove() {
    this.uni = false;
    this.uniMessage = true;
    this.uniDetails = false;
  }

  uniAdd() {
    this.uni = true;
    this.uniMessage = false;
    this.uniDetails = true;
  }

  parentConnectAdd() {
    this.otherAccounts = true;
    this.otherAccountsMessage = false;
    this.parentDetails = true;
  }

  parentConnectRemove() {
    this.otherAccounts = false;
    this.otherAccountsMessage = true;
    this.parentDetails = false;
  }

  showWebcam() {
    this.webcam = true;
    this.identityButtons = false;
  }

  hideWebcam() {
    this.webcam = false;
    this.identityButtons = true;
    this.goInOffice = false;
  }

  notWebcam() {
    this.identityButtons = false;
    this.goInOffice = true;
  }
  onSubmit() {
    this.submitted = true;
 
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.submitted = true;
      this.stepOne = true;
      this.stepTwo = false;
      this.stepThree = false;
      this.stepFour = false;
      this.stepFive = false;
      this.needInputs = true;
        return;
    }

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
      this.registerForm.value.dob,
      this.registerForm.value.guardian1,
      this.registerForm.value.guardian2,
      this.registerForm.value.partnerId
    ).subscribe(
      users => {
        this.currentUser = users;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.router.navigate(['/dashboard']);
      }
    )
      this.stepFive = false;
      this.stepSix = true;
  }
}
