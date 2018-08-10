import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Return list of all users and their details
  getUsers() {
    return this.http.get('http://localhost:3000/users')
  }

  // Return a specific user denoted by the userId
  getUserById(userId) {
    return this.http.get('http://localhost:3000/users/'+userId)
  }

  // Return a specific user denoted by the userId
  getUser(email) {
    return this.http.get('http://localhost:3000/users/'+email)
  }
}