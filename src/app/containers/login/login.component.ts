import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'cd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  // We are going to declare our variables here. We’ll have a loginForm that will represent our reactive form,
  // an authenticated boolean that will be true or false based on the users auth status and finally a profile
  // object that will hold the user data.
  location: Location;
  loginForm: FormGroup;
  // store: NgRedux<IAppState>;
  // user : Object;

  constructor(
    fb: FormBuilder,
    location: Location,
    private ngRouter: Router,
    private service: AuthService
  ) {
    // For our form, we’ll just have two fields and we’ll require both of them to be filled out before the form can be submitted
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],
    });

    this.location = location;
  }

  ngOnInit() {
    // We’ll check if the user is logged in once this component is loaded. We’ll do this by checking if a jwt key value
    // pair exists in local storage.
    const token = JSON.parse(localStorage.getItem('reduxPersist:token'));
    const loginUrl = '/login';
    if (token && this.location.path() === loginUrl) {
      this.ngRouter.navigate(['']);
    }
  }

  submitForm(value: any) {
    this.service.login(value.email, value.password);
  }

}
