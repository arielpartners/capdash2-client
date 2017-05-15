import { Component } from '@angular/core';
import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

import { AppComponent } from '../../app.component';
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
    .compileComponents();
    MockNgRedux.reset();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('logout()', () => {

    let button;
    beforeEach(() => {
      spyOn(component, 'logout');
      button = fixture.debugElement.nativeElement.querySelector('.logout');
      button.click();
      fixture.detectChanges();
    });

    it('should have been called when button is clicked', () => {
      fixture.whenStable().then(() => {
        expect(component.logout).toHaveBeenCalled();
      })
    });

    it('should redirects to /login route', () => {
      const href = button.getAttribute('href');
      expect(href).toBe('/login');
    });
  });

  describe('toggleRadio()', () => {

    let button;
    beforeEach(() => {
      spyOn(component, 'toggleRadio');
      fixture.detectChanges();
      // Todo: select button without using id.
      button = fixture.debugElement.nativeElement.querySelector('#dropdown-menu-lg-checkbox');
      button.click();
    });

    it('should have been called when radio button is clicked', async(() => {
      fixture.whenStable().then(() => {
        expect(component.toggleRadio).toHaveBeenCalled();
      })
    }));

    // Question: since input type is radio, wouldn't button be checked when clicked with or without invoking toggleRadio()? That seems native HTML DOM functionality rather than function of this component.
    it('should check when radio button is clicked', () => {
      expect(button.checked).toBe(true);
    });

    it('should uncheck when other readio button is clicked', () => {
      fixture.debugElement.nativeElement.querySelector('#user-checkbox').click();
      expect(button.checked).toBe(false);
    });

  });
});
