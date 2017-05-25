import { Component } from '@angular/core';
import { async, fakeAsync, ComponentFixture, TestBed, tick, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/root.types';
import { ITEM_TYPES } from '../../core/ajax/item/item.types';
import { ItemActions } from '../../core/ajax/item/item.actions';
import { AuthService } from '../../services/auth/auth.service';

import { HeaderActions } from './header.actions';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

  @Component({
    template: ''
  })

  class DummyComponent { }

  let spyDispatch;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: NgRedux<IAppState>;
  let actions: HeaderActions;
  let ajax: ItemActions;
  let auth: AuthService;

  beforeEach(async(() => {
    spyDispatch = spyOn(MockNgRedux.mockInstance, 'dispatch').and.callThrough();
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent, DummyComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'login', component: DummyComponent }
        ]),
        NgReduxTestingModule
      ],
      providers: [
        HeaderActions,
        ItemActions,
        AuthService,
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;

      // Inject dependencies
      // https://angular.io/docs/ts/latest/guide/testing.html#!#component-with-async-service
      auth = fixture.debugElement.injector.get(AuthService);
      store = TestBed.get(NgRedux);
      actions = TestBed.get(HeaderActions);
      ajax = TestBed.get(ItemActions);
    });

    MockNgRedux.reset();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('ngAfterViewInit()', () => {
    it('should have dispatch ajax call to retrieve single user', async(() => {
      component.ngAfterViewInit();
      expect(spyDispatch).toHaveBeenCalledWith(ajax.loadItem(ITEM_TYPES.USER));
    }));
  });

  describe('logout()', () => {
    it('should exist', async(() => {
      expect(component.logout).toBeTruthy();
    }));

    xit('should have been called when button is clicked', fakeAsync(() => {
      const spy = spyOn(component, 'logout');

      /*
       * Todo: button is undefined since ngIf false case is
       *       not included in fixture.debugElement.
       *       Either need to go back to not using ngIf or
       *       make dropdown-menu.component and have
       *       logout() placing in the dropdown-menu.component
       */

      const button = fixture.debugElement.query(By.css('.logout'));
      button.triggerEventHandler('click', null);
      tick();
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    }));

    it('should have called logout() from AuthService', async(() => {
        const spy = spyOn(auth, 'logout');
        component.logout();
        expect(spy).toHaveBeenCalled();
    }));

    it('should have called dispatch to close toggle', () => {
      component.logout();
      expect(spyDispatch).toHaveBeenCalledWith(actions.closeToggle());
    });
  });

  describe('toggleDropdown()', () => {
    let button;
    beforeEach(() => {
      localStorage.clear();
      button = fixture.debugElement.query(By.css('#dropdown-menu-lg-checkbox'));
      // spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    });

    it('should have been called when radio button is clicked', fakeAsync(() => {
      const spy = spyOn(component, 'toggleDropdown');
      button.triggerEventHandler('click', null);
      tick();
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    }));

    it('should open toggle when $event exist and localStorage has no value', () => {
      component.toggleDropdown({ target: button.nativeElement });
      fixture.detectChanges();
      expect(spyDispatch).toHaveBeenCalledWith(actions.openToggle(button.nativeElement.id));
    });

    it('should open toggle when $event exist and was not toggled', () => {
      localStorage.setItem('reduxPersist:header', JSON.stringify({
        isToggled: false,
        selectedDropdown: ''
      }));
      component.toggleDropdown({ target: button.nativeElement });
      fixture.detectChanges();
      expect(spyDispatch).toHaveBeenCalledWith(actions.openToggle(button.nativeElement.id));
    });

    it('should open new toggle when $event.target.id and selectedDropdown does not match', () => {
      localStorage.setItem('reduxPersist:header', JSON.stringify({
        isToggled: true,
        selectedDropdown: 'something-already-opened'
      }));
      component.toggleDropdown({ target: button.nativeElement });
      fixture.detectChanges();
      expect(spyDispatch).toHaveBeenCalledWith(actions.openToggle(button.nativeElement.id));
    });

    it('should close toggle when $event is undefined', () => {
      component.toggleDropdown(undefined);
      fixture.detectChanges();
      expect(spyDispatch).toHaveBeenCalledWith(actions.closeToggle());
    });

    it('should close toggle when $event matches selectedDropdown', () => {
      localStorage.setItem('reduxPersist:header', JSON.stringify({
        isToggled: true,
        selectedDropdown: button.nativeElement.id
      }));
      component.toggleDropdown({ target: button.nativeElement });
      fixture.detectChanges();
      expect(spyDispatch).toHaveBeenCalledWith(actions.closeToggle());
    });
  });
});
