import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(
    private auth: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.auth.logoutUser();
  }


  get form() { return this.loginForm.controls; }

  // To be called when form is submitted
  onSubmit() {
    this.auth.loginUser(this.form.email.value, this.form.password.value);
    if (localStorage.getItem('currentUser') != null) {
      this.router.navigate(['https://www.google.com'])
    }
  }
}

