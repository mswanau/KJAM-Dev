import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  updateStudent(studentNo, course, institute, startDate, endDate, id) {
    var body = {
      studentNo: studentNo,
      course: course,
      institute: institute,
      startDate: startDate,
      endDate: endDate,
      id: id
    }
    return this.http.put('http://localhost:3000/student/update', body);
  }
}
