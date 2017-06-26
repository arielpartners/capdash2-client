// import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
// import { RouterTestingModule } from '@angular/router/testing';
// import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
// import { Location } from '@angular/common';
// import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthModule } from 'dhs-common-module/src/lib/auth/auth.module';
import {RouterTestingModule} from '@angular/router/testing';
// import { AuthService } from 'dhs-common-module/src/lib/auth/auth.service';
// import { ItemActions } from 'dhs-common-module/src/lib/ajax/item/item.actions';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        AuthModule,
        RouterTestingModule
      ]
    }).compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
