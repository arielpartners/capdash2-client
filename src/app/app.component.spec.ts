import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MockComponent } from 'ng2-mock-component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

import { HeaderActions } from './components/header/header.actions';
import { ItemActions } from './core/ajax/item/item.actions';

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
        MockComponent({
          selector: 'cd-header',
          inputs: [
            'isToggled', 'selectedDropdown',
            'userName', 'userProfile'
          ],
          outputs: [
            'isToggled', 'selectedDropdown',
            'userName', 'userProfile'
          ]
        }),
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
      providers: [HeaderActions, ItemActions]
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

  describe('onClickApp()', () => {
    let button, spy, headerActions;

    beforeEach( async(inject([HeaderActions], (actions: HeaderActions) => {
      headerActions = actions;
    })));

    beforeEach(() => {
      localStorage.clear();
      button = fixture.debugElement.query(By.css('.app'));
      spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    });

    it('should close header toggle when app is clicked', () => {
      localStorage.setItem('reduxPersist:header', JSON.stringify({
        isToggled: true,
        selectedDropdown: button.nativeElement.id
      }));
      app.onClickApp();
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith(headerActions.closeToggle());
    });
  });

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

    it('should set Authorization Bearer when token exist', async(() => {
      const spy = spyOn(app, 'setRequestHeader');
      fixture.whenStable().then(() => {
        localStorage.setItem('reduxPersist:token', token);
        fixture.detectChanges();
      }).then(() => {
        expect(spy).toHaveBeenCalled();
      });
    }));
  });
});
