import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { ItemActions } from '../../core/ajax/item/item.actions';
import { ITEM_TYPES } from '../../core/ajax/item/item.types';

const data = require('../../../../json-server/db.json');

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  @Component({
    template: '<router-outlet></router-outlet>'
  })

  class RouteComponent {}

  @Component({
    template: '<p>blank component</p>'
  })

  class DefaultComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteComponent, LoginComponent, DefaultComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: '', component: DefaultComponent },
          { path: 'login', component: LoginComponent }
        ]),
        NgReduxTestingModule
      ],
      providers: [
        {
          provide: ItemActions,
          useClass: ItemActions
        }
      ],
    })
    .compileComponents();
    MockNgRedux.reset();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {

    let routeComponent: RouteComponent;
    let routeFixture: ComponentFixture<RouteComponent>;

    beforeEach(() => {
      routeFixture = TestBed.createComponent(RouteComponent);
      routeComponent = routeFixture.componentInstance;
    });

    it('should redirect to base url when token exist and current location is login url',
        async(inject([Router, Location], (router: Router, location: Location) => {

      const token = JSON.stringify(data.user_token.jwt);
      router.navigate(['/']).then(() => {
        expect(location.path()).toBe('/');
        localStorage.setItem('reduxPersist:token', token)
        return router.navigate(['/login']);
      }).then(() => {
        expect(location.path()).toBe('/');
      });

    })));
  });

  describe('submitForm(authForm)', () => {

    it('should have been called store.dispatch', () => {

      const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
      const form = {
        auth: {
          email: 'test@test.com',
          password: '1234'
        }
      };

      component.submitForm({
        email: form.auth.email,
        password: form.auth.password
      });

      expect(spy).toHaveBeenCalledWith({
        type: ItemActions.LOAD_STARTED,
        meta: {
          itemType: ITEM_TYPES.TOKEN
        },
        form
      });
    });
  });
});
