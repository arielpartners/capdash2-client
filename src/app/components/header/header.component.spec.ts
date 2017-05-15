import { Component } from '@angular/core';
import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from "@angular/common";

import { MockComponent } from 'ng2-mock-component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

import { AppComponent } from '../../app.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

  @Component({
    template: ''
  })
  class DummyComponent { }

  let location: Location;
  let router: Router;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DummyComponent,
        HeaderComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'login', component: DummyComponent }
        ]),
        NgReduxTestingModule,
      ],
    })
    .compileComponents();
    MockNgRedux.reset();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    router.initialNavigation();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('logout()', () => {
    let button;
    beforeEach(() => {
      spyOn(component, 'logout');
      // spyOn(component, 'toggleRadio');
      button = fixture.debugElement.nativeElement.querySelector('.logout');
      button.click();
      fixture.detectChanges();
    });

    it('should have been called when button is clicked', () => {
      fixture.whenStable().then(() => {
        expect(component.logout).toHaveBeenCalled();
        // expect(component.toggleRadio).toHaveBeenCalled();
      })
    });

    it('should redirects to /login route', () => {
      let href = button.getAttribute('href');
      expect(href).toBe('/login');
    });
  });

  describe('toggleRadio()', () => {

    let button;
    beforeEach(() => {
      spyOn(component, 'toggleRadio');
      fixture.detectChanges();
      button = fixture.debugElement.nativeElement.querySelector('#dropdown-menu-lg-checkbox');
      button.click();
    });

    it('should have been called when radio button is clicked', async(() => {
      fixture.whenStable().then(() => {
        expect(component.toggleRadio).toHaveBeenCalled();
      })
    }));

    it('should check when radio button is clicked', () => {
      expect(button.checked).toBe(true);
    });

    it('should uncheck when other readio button is clicked', () => {
      fixture.debugElement.nativeElement.querySelector('#user-checkbox').click();
      expect(button.checked).toBe(false);
    });

  });
});
