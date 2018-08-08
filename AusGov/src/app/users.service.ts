import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // Return list of all users and their details
  getUsers() {
    return this.http.get('http://localhost:3000/users')
  }

  // Return a specific user denoted by the userId
  getUser(userId) {
    return this.http.get('http://localhost:3000/users/'+userId)
  }
}
