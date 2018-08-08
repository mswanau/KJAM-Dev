import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient, 
    private users: UsersService, 
    private currentUser: User, 
    private listUsers: User[]
  ) { }

  // Authenticate user and log them in
  loginUser(username, password) {
    // Get list of users
    this.users.getUsers().subscribe(users => {
      this.listUsers = users as User[]
    })

    // Find requested user
    for (var i = 0; i < this.listUsers.length; i++) {
      if (this.listUsers[i].email == username) {
        this.currentUser = this.listUsers[i];
        break;
      }
    }

    if (this.currentUser.password == password) {
      // Do login
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  // Register user
  registerUser(user) {
    return this.http.post<any>('http://localhost:3000/users', user)
  }

  // Log the user out by removing them from local storage
  logoutUser() {
    localStorage.removeItem('currentUser');
  }
}
