import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  updateStudent(studentNo, institute, id) {
    var body = {
      studentNo: studentNo,
      course: "Bachelor of Business",
      institute: institute,
      startDate: "2018-02-12",
      endDate: "2020-11-16",
      id: id
    }
    return this.http.put('http://localhost:3000/student/update', body);
  }

  getStudent(studentNo) {
    return this.http.get('http://localhost:3000/student/' + studentNo);
  }
}
