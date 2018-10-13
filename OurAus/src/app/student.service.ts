import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  updateStudent(studentNo, id, institute) {
    var body = {
      'studentNo': studentNo,
      'id': id,
      'institute': institute
    }
    return this.http.put('http://localhost:3000/student/update', body);
  }

  getStudent(studentNo) {
    return this.http.get('http://localhost:3000/student/' + studentNo);
  }
}
