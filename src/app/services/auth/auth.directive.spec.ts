import { TestBed, ComponentFixture, async, fakeAsync, tick, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

import { LogoutButtonDirective } from './auth.directive';

import { AuthService } from './auth.service';
import { ItemActions } from '../../core/ajax/item/item.actions';

describe('LogoutButtonDirective', () => {
  let fixture, directiveEl, directiveInstance, service;

  @Component({
    template: '<a cdLogoutBtn></a>'
  })
  class TestComponent {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        LogoutButtonDirective
      ],
      imports: [NgReduxTestingModule],
      providers: [
        AuthService,
        ItemActions,
        MockNgRedux,
      ]
    });
    MockNgRedux.reset();
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      directiveEl = fixture.debugElement.query(By.directive(LogoutButtonDirective));
      directiveInstance = directiveEl.injector.get(LogoutButtonDirective);
    });
  });

  beforeEach(async(
    inject([AuthService], (auth: AuthService) => {
      service = auth;
    })
  ));

  it('should exist when element has directive attribute', () => {
    expect(directiveEl).not.toBeNull();
  });

  it('should have called logout function from service', fakeAsync(() => {
    const spy = spyOn(service, 'logout');
    directiveEl.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));
});
