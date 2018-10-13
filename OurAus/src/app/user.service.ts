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
  registerUser(firstName, lastName, email, password, phone, address, suburb, 
    city, state, postcode, birthDate, guardian1, guardian2, partner) {
    var body = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      phone: phone,
      address: address,
      suburb: suburb,
      city: city,
      state: state,
      postcode: postcode,
      birth_date: birthDate,
      guardian1: guardian1,
      guardian2: guardian2,
      partner: partner
    }
    return this.http.post<User>('http://localhost:3000/users/register', body);
  }

  // Log user in
  loginUser(email: string, password: string) {
    var body = {uemail: email, upassword: password};
    return this.http.post<User>('http://localhost:3000/users', body);
  }

  // Reset password of user with specified email
  resetPassword(email: string, password: string) {
    var body = {email: email, password: password}
    return this.http.put<void>('http://localhost:3000/users/reset', body)
  }
}