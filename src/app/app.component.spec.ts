import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
import { Component, ReflectiveInjector } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MockComponent } from 'ng2-mock-component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { NgRedux } from '@angular-redux/store';
import { HeaderActions } from './components/header/header.actions';
import { ItemActions } from './core/ajax/item/item.actions';
import { ItemService } from './core/ajax/item/item.service';
import { ITEM_TYPES } from './core/ajax/item/item.types';

import {
  HttpModule,
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  RequestOptions,
  XHRBackend,
  Headers
} from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';


describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const data = require('../../json-server/db.json');
  const token = JSON.stringify(data.user_token.jwt);

  // const global = {
  //   XMLHttpRequest: {
  //     open: function () {
  //       open.apply(this, arguments);
  //       this.setRequestHeader('Authorization', 'Bearer ' + token);
  //     }
  //   }
  // };

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
        NgReduxTestingModule,
        HttpModule
      ],
      providers: [
        HeaderActions,
        ItemActions,
        ItemService,
        { provide: XHRBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
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

    let actions;

    beforeEach( async(inject([ItemActions], (ItemActions: ItemActions) => {
      actions = ItemActions;
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

    it('should have dispatch ItemActions.loadItem with ITEM_TYPES.USER', async(() => {
      const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
      fixture.whenStable().then(() => {
        localStorage.setItem('reduxPersist:token', token);
        fixture.detectChanges();
      }).then(() => {
        expect(spy).toHaveBeenCalledWith(actions.loadItem(ITEM_TYPES.USER));
      });
    }));

    it('should have called setAuthorizationBearer() when token exist', async(() => {
      const spy = spyOn(app, 'setAuthorizationBearer');
      fixture.whenStable().then(() => {
        localStorage.setItem('reduxPersist:token', token);
        fixture.detectChanges();
      }).then(() => {
        expect(spy).toHaveBeenCalled();
      });
    }));

    // it('should have set request header with given token', async(inject([XHRBackend], (mockBackend) => {
    //   // const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    //   let lastConnection;
    //   mockBackend.connections.subscribe((connection: MockConnection) => {
    //     lastConnection = connection;
    //   });
    //   fixture.whenStable().then(() => {
    //     localStorage.setItem('reduxPersist:token', token);
    //     fixture.detectChanges();
    //   }).then(() => {
    //     console.log('After ngAfterViewInit()', lastConnection);
    //   });
    // })));
  });

  describe('setAuthorizationBearer()', () => {

    beforeEach(() => {
      // this.injector = ReflectiveInjector.resolveAndCreate([
      //   {provide: ConnectionBackend, useClass: MockBackend},
      //   {provide: RequestOptions, useClass: BaseRequestOptions},
      //   Http,
      //   ItemService,
      // ]);
      // this.itemService = this.injector.get(ItemService);
      // this.backend = this.injector.get(ConnectionBackend) as MockBackend;

      // app.setAuthorizationBearer(token);

      // this.backend.connections.subscribe((connection: any) => {
      //   console.log('subscribe', connection);
      //   this.lastConnection = connection;

      //   console.log(connection.request.headers.keys());
      //   // connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
      // });
    });

    // it('test', () => {
    //   // const xhr = new XMLHttpRequest();
    //   // app.setAuthorizationBearer(token);
    //   // localStorage.clear();

    //   const spy1 = spyOn(new XMLHttpRequest(), 'open');
    //   const spy2 = spyOn(new XMLHttpRequest(), 'setRequestHeader');
    //   app.setAuthorizationBearer(token);
    //   expect(spy1).toHaveBeenCalled();
    //   expect(spy2).toHaveBeenCalled();
    //   // xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    // });

    // it('should have called setAuthorizationBearer() when token exist', async(() => {
    //   const spy1 = spyOn(new XMLHttpRequest(), 'open');
    //   const spy2 = spyOn(new XMLHttpRequest(), 'setRequestHeader');
    //   fixture.whenStable().then(() => {
    //     localStorage.setItem('reduxPersist:token', token);
    //     app.setAuthorizationBearer(token);
    //   }).then(() => {
    //     expect(spy1).toHaveBeenCalled();
    //     expect(spy2).toHaveBeenCalled();
    //   });
    // }));

    // it('should have request header', () => {
    //   // const headers = new Headers({ 'Accept': 'application/json' });
    //   //   headers.append('Authorization', `Bearer ${token}`);
    //   // const options = new RequestOptions({ headers: headers });

    //   // app.setAuthorizationBearer(token);
    //   const test = this.itemService.get(ITEM_TYPES.USER);

    //   console.log('should have request header', this.lastConnection.request.headers.keys(), this.lastConnection);
    //   // test.subscribe(res => {
    //   // });
    //   // expect(this.lastConnection).toBeDefined('no http service connection at all?');
    // });

  });
});
