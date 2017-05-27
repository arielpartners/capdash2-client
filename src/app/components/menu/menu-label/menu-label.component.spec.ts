import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLabelComponent } from './menu-label.component';

describe('MenuLabelComponent', () => {
  let component: MenuLabelComponent;
  let fixture: ComponentFixture<MenuLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
