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
import { ITEM_TYPES } from './core/ajax/item/item.types';
import { AuthService } from './services/auth/auth.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const data = require('../../json-server/db.json');
  const token = JSON.stringify(data.user_token.jwt);

  @Component({
    template: ''
  })
  class DummyComponent { }

  beforeEach(() => {
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough(); // Jasmine 2.x
    spyOn(XMLHttpRequest.prototype, 'send');

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
        NgReduxTestingModule,
      ],
      providers: [
        HeaderActions,
        ItemActions,
        AuthService,
      ]
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
    it('should close header toggle when app is clicked', async(inject([HeaderActions], (actions: HeaderActions) => {

      const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
      const button = fixture.debugElement.query(By.css('.app'));

      localStorage.clear();

      fixture.whenStable().then(() => {
        localStorage.setItem('reduxPersist:header', JSON.stringify({
          isToggled: true,
          selectedDropdown: button.nativeElement.id
        }));
        app.onClickApp();
        fixture.detectChanges();
      }).then(() => {
        expect(spy).toHaveBeenCalledWith(actions.closeToggle());
      });
    })));
  });

  describe('ngAfterViewInit()', () => {

    let actions;

    beforeEach( async(inject([ItemActions], (itemActions: ItemActions) => {
      actions = itemActions;
    })));

    afterEach(() => {
      localStorage.clear();
    });

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
