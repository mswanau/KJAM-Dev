import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centrelink-form',
  templateUrl: './centrelink-form.component.html',
  styleUrls: ['./centrelink-form.component.css']
})
export class CentrelinkFormComponent implements OnInit {
  submitted = false;

  stepOne = true;
  stepTwo = false;
  stepThree = false;
  stepFour = false;


  constructor() { }

  ngOnInit() {
  }

  onSubmitStepOne() {
    this.stepOne = true;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepFour = false;
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

}
