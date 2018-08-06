import { Component, OnInit } from '@angular/core';

import { User } from '../user'
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users$: Object;
  
  constructor(private data: UsersService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }

}

