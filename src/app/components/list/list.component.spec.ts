import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ListComponent, NavListCssDirective} from './list.component';
import {By} from '@angular/platform-browser';
import {Component} from '@angular/core';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('NavListCssDirective', () => {

  let fixture, directiveEl, directiveInstance;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestWrapperComponent,
        ListComponent,
        NavListCssDirective
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TestWrapperComponent);
      directiveEl = fixture.debugElement.query(By.directive(NavListCssDirective));
      directiveInstance = directiveEl.injector.get(NavListCssDirective);
    });
  }));

  it('should exist when element has directive attribute', () => {
    expect(directiveEl).not.toBeNull();
  });

  it('should add className "text-inverse" to host element', () => {
    fixture.detectChanges();
    const expectedClass = directiveEl.classes['nav'];
    expect(expectedClass).toBeTruthy()
  });
});

@Component({
  template: `<cd-list nav-list></cd-list>`
})
class TestWrapperComponent {}
