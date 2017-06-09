import { TestBed, async, fakeAsync, tick, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

import { CloseToggleDirective } from './menu.directive';

import { MenuService } from './menu.service';
import { MenuActions } from './menu.actions';

describe('CloseToggleDirective', () => {
  let fixture, directiveEl, directiveInstance, service;

  @Component({
    template: '<a cdCloseToggle></a>'
  })
  class TestComponent {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        CloseToggleDirective
      ],
      imports: [NgReduxTestingModule],
      providers: [
        MenuService,
        MenuActions,
        MockNgRedux,
      ]
    });
    MockNgRedux.reset();
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      directiveEl = fixture.debugElement.query(By.directive(CloseToggleDirective));
      directiveInstance = directiveEl.injector.get(CloseToggleDirective);
    });
  });

  beforeEach(async(
    inject([MenuService], (menu: MenuService) => {
      service = menu;
    })
  ));

  it('should exist when element has directive attribute', () => {
    expect(directiveEl).not.toBeNull();
  });

  it('should have called closeToggle function from service', fakeAsync(() => {
    const spy = spyOn(service, 'closeToggle');
    directiveEl.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));
});
