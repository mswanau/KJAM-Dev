import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import { PasswordValidation } from '../password-validation';
import { UserService } from '../user.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  resetForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private users: UserService
  ) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email:  ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      verify: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.users.resetPassword(this.resetForm.value.email, this.resetForm.value.password).subscribe()
    this.router.navigate(['/login'])
  }

}
