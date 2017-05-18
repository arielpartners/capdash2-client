import { Component } from '@angular/core';
import { async, fakeAsync, ComponentFixture, TestBed, tick, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

import { NgRedux } from '@angular-redux/store';
// import { StoreModule } from '../../store/store.module';
import { IAppState } from '../../store/root.types';
import { HeaderComponent } from './header.component';
import { HeaderActions } from './header.actions';

import { Observable } from 'rxjs/Observable';

describe('HeaderComponent', () => {

  @Component({
    template: ''
  })

  class DummyComponent { }

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
        NgReduxTestingModule
      ],
      providers: [HeaderActions]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
    });
    MockNgRedux.reset();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('logout()', () => {

    let button;

    beforeEach( () => {
      button = fixture.debugElement.query(By.css('.logout'));
    });

    it('should have been called when button is clicked', () => {
      fakeAsync(() => {
        button.triggerEventHandler('click', null);
        tick();
        fixture.detectChanges();
        expect(component.logout).toHaveBeenCalled();
      });
    });

    it('should clear localStorage when logout() is called', () => {
      spyOn(localStorage, 'clear');
      component.logout();
      expect(localStorage.clear).toHaveBeenCalled();
    });

    // Todo: spy dispatch toHaveBeenCalledWith()
    //       HeaderActions.closeToggle()
    xit('should close all radio button when logout() is called', () => {
      spyOn(component, 'toggleDropdown');
      component.logout();
      expect(component.toggleDropdown).toHaveBeenCalled();
    });

    xit('should redirects to /login route', () => {
    });
  });

  describe('toggleDropdown()', () => {

    let button, spy, headerActions;

    beforeEach( async(inject([HeaderActions], (actions: HeaderActions) => {
      headerActions = actions;
    })));

    beforeEach(() => {
      localStorage.clear();
      button = fixture.debugElement.query(By.css('#dropdown-menu-lg-checkbox'));
      spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    });

    it('should have been called when radio button is clicked', () => {
      fakeAsync(() => {
        button.triggerEventHandler('click', null);
        tick();
        fixture.detectChanges();
        expect(component.toggleDropdown).toHaveBeenCalled();
      });
    });

    it('should close toggle when $event is undefined', () => {
      component.toggleDropdown(undefined);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith(headerActions.closeToggle());
    });

    it('should close toggle when $event matches selectedDropdown', () => {
      localStorage.setItem('reduxPersist:header', JSON.stringify({
        isToggled: true,
        selectedDropdown: button.nativeElement.id
      }));
      component.toggleDropdown({ target: button.nativeElement });
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith(headerActions.closeToggle());
    });

    it('should open toggle when $event exist and localStorage has no value', () => {
      component.toggleDropdown({ target: button.nativeElement });
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith(headerActions.openToggle(button.nativeElement.id));
    });

    it('should open toggle when $event exist and was not toggled', () => {
      localStorage.setItem('reduxPersist:header', JSON.stringify({
        isToggled: false,
        selectedDropdown: ''
      }));
      component.toggleDropdown({ target: button.nativeElement });
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith(headerActions.openToggle(button.nativeElement.id));
    });

    it('should open new toggle even when $event.target.id does not match', () => {
      localStorage.setItem('reduxPersist:header', JSON.stringify({
        isToggled: true,
        selectedDropdown: 'something-already-opened'
      }));
      component.toggleDropdown({ target: button.nativeElement });
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith(headerActions.openToggle(button.nativeElement.id));
    });

  });
});
