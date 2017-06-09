import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {MenuComponent, MenuHeaderComponent} from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('get/set triggerBy', () => {
    it('should set new value to triggerBy', () => {
      component.triggerBy = 'some-id';
      fixture.detectChanges();
      expect(component.triggerBy).toBe('some-id-checkbox');
    });
  });

  describe('set className to child element node', () => {
    it('should generate _classList object', () => {

      component.classList = 'some-class';
      fixture.detectChanges();
      const classList = component._classList;
      expect(classList['some-class']).toBeTruthy();
    });
  });
});


describe('MenuHeaderComponent', () => {
  let component: MenuHeaderComponent;
  let fixture: ComponentFixture<MenuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHeaderComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
