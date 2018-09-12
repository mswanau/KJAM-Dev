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
  stepFive = false;
  stepSix = false;
  date: Date;  

  constructor() { 
  }

  ngOnInit() {
    this.date = new Date();
    this.date.setDate( this.date.getDate() + 14 );
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
  }

  goStepThree() {
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = true;
    this.stepFour = false;
    this.stepFive = false;
  }

  goStepFour() {
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepFour = true;
    this.stepFive = false;
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
