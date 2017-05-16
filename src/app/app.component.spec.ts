import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MockComponent } from 'ng2-mock-component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  @Component({
    template: ''
  })
  class DummyComponent { }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DummyComponent,
        MockComponent({selector: 'cd-login'}),
        MockComponent({selector: 'cd-header'}),
        MockComponent({
          selector: 'cd-sidebar',
          inputs: ['version', 'loading', 'error'],
          outputs: ['version', 'loading', 'error'],
        }),
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: DummyComponent },
          { path: 'login', component: DummyComponent }
        ]),
        NgReduxTestingModule
      ],
    });
    TestBed.compileComponents();
    MockNgRedux.reset();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'cd works!'`, async(() => {
    expect(app.title).toEqual('cd works!');
  }));

  it('should render content', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app-content').className).toBeTruthy();
  }));

  describe('ngAfterViewInit()', () => {

    const data = require('../../json-server/db.json');
    const token = JSON.stringify(data.user_token.jwt);

    it('should redirect to login url when token has expired', async(inject([Router, Location], (router: Router, location: Location) => {
      fixture.whenStable().then(() => {
        localStorage.clear();
        fixture.detectChanges();
      }).then(() => {
        expect(app.location.path()).toBe('/login');
      });
    })));

    it('should stay on base url when token exist', async(inject([Router, Location], (router: Router, location: Location) => {

      fixture.whenStable().then(() => {
        localStorage.setItem('reduxPersist:token', token);
        fixture.detectChanges();
      }).then(() => {
        expect(app.location.path()).toBe('');
      });
    })));
  });
});
