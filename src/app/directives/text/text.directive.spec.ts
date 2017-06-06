import { TextInverseDirective } from './text.directive';
import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By} from '@angular/platform-browser';

describe('TextInverseDirective', () => {

  let fixture, directiveEl, directiveInstance;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestWrapperComponent,
        TextInverseDirective
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TestWrapperComponent);
      directiveEl = fixture.debugElement.query(By.directive(TextInverseDirective));
      directiveInstance = directiveEl.injector.get(TextInverseDirective);
    });
  }));

  it('should exist when element has directive attribute', () => {
    expect(directiveEl).not.toBeNull();
  });

  it('should add className "text-inverse" to host element', () => {
    fixture.detectChanges();
    const expectedClass = directiveEl.classes['text-inverse'];
    expect(expectedClass).toBeTruthy()
  });
});

@Component({
  template: `<div text-inverse></div>`
})
class TestWrapperComponent {}
