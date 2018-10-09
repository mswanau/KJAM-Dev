import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { StudentService } from '../student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  model: any = {};

  constructor(
    private router: Router,
    private students: StudentService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.students.updateStudent(this.model.studentNo, this.model.course, 'QUT', 
      this.model.startDate, this.model.endDate, this.model.ourAus).subscribe()
      this.router.navigate(['/submitted'])      
  }

}
