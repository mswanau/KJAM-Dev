import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-centrelink-form',
  templateUrl: './centrelink-form.component.html',
  styleUrls: ['./centrelink-form.component.css']
})
export class CentrelinkFormComponent implements OnInit {

  centrelinkForm: FormGroup;

  submitted = false;

  stepOne = true;
  stepTwo = false;
  stepThree = false;
  stepFour = false;
  stepFive = false;
  stepSix = false;
  date: Date;  
  jobTitle = '';
  companyName = '';
  dateJob = '';

  constructor(
    private formBuilder: FormBuilder
  ) { 
  }

  ngOnInit() {
    this.date = new Date();
    this.date.setDate( this.date.getDate() + 14 );
    this.centrelinkForm = this.formBuilder.group({
      jobTitle: [''],
      companyName: [''],
      dateJob: ['']
    });
  }

  beginClaim(){
    this.stepTwo = true;
    this.stepOne = false;
    this.stepFour = false;
    this.stepThree = false;
    this.stepFive = false;
  }
  goStepOne() {
    this.stepOne = true;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepFour = false;
    this.stepFive = false;
  }

  goStepTwo() {
    this.stepOne = false;
    this.stepTwo = true;
    this.stepThree = false;
    this.stepFour = false;
    this.stepFive = false;
    this.jobTitle = this.centrelinkForm.value.jobTitle;
    this.companyName = this.centrelinkForm.value.companyName;
    this.dateJob = this.centrelinkForm.value.dateJob;
  }

  goStepThree() {
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = true;
    this.stepFour = false;
    this.stepFive = false;

  }

  goStepFour() {
    if (this.centrelinkForm.invalid) {
      this.submitted = true;
      this.stepOne = false;
      this.stepTwo = true;
      this.stepThree = false;
      this.stepFour = false;
      this.stepFive = false;

      return;

    } else {
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepFour = true;
    this.stepFive = false;

    this.jobTitle = this.centrelinkForm.value.jobTitle;
    this.companyName = this.centrelinkForm.value.companyName;
    this.dateJob = this.centrelinkForm.value.dateJob;
  }
}

  goStepFive() {
    this.stepFive = true;
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepFour = false;
  }

  onSubmit() {
    this.stepFive = false;
    this.stepSix = true;
  }

}
