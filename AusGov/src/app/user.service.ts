import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Return list of all users and their details
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users')
  }

  // Return a specific user denoted by the userId
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users/'+userId)
  }

  // Return a specific user denoted by the userId
  getUser(email: string): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users/'+email)
  }

  // Add user
  registerUser(user: User) {
    return this.http.post<User>('http://localhost:3000/users/register', user);
  }

  // Log user in
  loginUser(email: string, password: string) {
    console.log('login');
    var body = {uemail: email, upassword: password};
    return this.http.post<User>('http://localhost:3000/users', body);
  }
}