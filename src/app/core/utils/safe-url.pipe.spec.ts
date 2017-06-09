import {SafeUrlPipe} from './safe-url.pipe';
import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

describe('SafeUrlPipe', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, SafeUrlPipe ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it(':javascript url should not return unsafe::javascript', () => {
    component.link = ':javascript';
    fixture.detectChanges();
    expect(fixture.nativeElement.firstElementChild.href).not.toBe('unsafe::javascript')
  });
});

@Component({
  template: `
    <a [href]="link | safeUrl">Test</a>
  `
})
class TestComponent {
  private _link: string;
  get link() { return this._link }
  set link(value: string) {
    this._link = value;
  }
}
