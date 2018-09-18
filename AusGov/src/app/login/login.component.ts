 import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  currentUser: Object;
  incorrect = false;
  
  constructor(
    private router: Router,
    private users: UserService
  ) { }

  ngOnInit() {
    // this.users.getAllUsers().subscribe(
    //   users => this.userslist = users
    // );

  }
  onSubmit() {
    this.users.loginUser(this.model.email, this.model.password).subscribe(
      users => {
        this.currentUser = users;
        // Check if user authenticated correctly
        if (this.currentUser != null) {
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          this.router.navigate(['/dashboard']);
        }
      
      }, 
      errorResponse => {
        // Login Error
        this.incorrect = true;
      }
    );
  }
}

