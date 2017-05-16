import { Component } from '@angular/core';
import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

import { HeaderComponent } from './header.component';

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
        NgReduxTestingModule,
      ],
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

  describe('ngOnInit()', () => {

    beforeEach( () => {
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('should initialize with isToggled set as false', () => {
      expect(component.isToggled).toBeFalsy();
    });

    it('should initialize with selectedDropdown set as empty string', () => {
      expect(component.selectedDropdown).toBe('');
    });
  });

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

    it('should close all radio button when logout() is called', () => {
      spyOn(component, 'toggleDropdown');
      component.logout();
      expect(component.toggleDropdown).toHaveBeenCalled();
    });

    it('should redirects to /login route', () => {
      // Todo
    });
  });

  describe('toggleDropdown()', () => {

    let button;

    beforeEach( () => {
      component.ngOnInit();
      button = fixture.debugElement.query(By.css('#dropdown-menu-lg-checkbox'));
    });

    it('should have been called when radio button is clicked', () => {
      fakeAsync(() => {
        button.triggerEventHandler('click', null);
        tick();
        fixture.detectChanges();
        expect(component.toggleDropdown).toHaveBeenCalled();
      });
    });

    it('should close any dropdown menu when event target is undefined', () => {
      component.toggleDropdown(undefined);
      fixture.detectChanges();
      expect(component.isToggled).toBeFalsy();
      expect(component.selectedDropdown).toBe('');
    });

    it('should close toggled dropdown menu when event target matches', async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.isToggled = true;
        component.selectedDropdown = 'dropdown-menu-lg-checkbox';
        component.toggleDropdown({target: button.nativeElement});
        fixture.detectChanges();
        expect(component.isToggled).toBeFalsy();
        expect(component.selectedDropdown).toBe('');
      });
    }));

    it('should toggle dropdown menu when event target does not match current dropdown', async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.isToggled = true;
        component.selectedDropdown = 'something-else';
        component.toggleDropdown({target: button.nativeElement});
        fixture.detectChanges();
        expect(component.isToggled).toBeTruthy();
        expect(component.selectedDropdown).toBe(button.nativeElement.id);
      });
    }));

    it('should toggle dropdown menu when event target does not match current dropdown', async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.isToggled = false;
        component.selectedDropdown = '';
        component.toggleDropdown({target: button.nativeElement});
        fixture.detectChanges();
        expect(component.isToggled).toBeTruthy();
        expect(component.selectedDropdown).toBe(button.nativeElement.id);
      });
    }));
  });
});
