import { Component, OnInit, SimpleChange, OnChanges } from '@angular/core';
import { User } from '../../user';
import { Router } from "@angular/router";
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  loggedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('currentUser') != null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.loggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

}
