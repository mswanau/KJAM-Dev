import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  currentUser: User;
  student: Student;

  constructor(
    private StudentService: StudentService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.StudentService.getStudent(this.currentUser.student).subscribe(
      StudentService => this.student = StudentService
    )
  }

}
