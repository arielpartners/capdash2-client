import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { ITEM_TYPES } from '../../core/ajax/item/item.types';
import { ItemActions } from '../../core/ajax/item/item.actions';
import { HeaderComponent } from './header.component';
import {
  DropdownActions,
  DropdownService,
  MockMenuButtonComponent,
  MockMenuComponent,
  MockMenuHeaderComponent,
  MockMenuItemComponent
} from 'dhs-common-module/src/lib/menu/';
import {MockIconComponent} from 'dhs-common-module/src/lib/icon/';
import {MockBadgeComponent, MockListComponent, MockListItemComponent} from 'dhs-common-module/src/lib/list/';

import {SafeUrlPipe} from '../../core/utils/safe-url.pipe';

describe('HeaderComponent', () => {

  @Component({
    template: ''
  })

  class DummyComponent { }

  let spyDispatch;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let ajax: ItemActions;

  beforeEach(async(() => {
    spyDispatch = spyOn(MockNgRedux.mockInstance, 'dispatch').and.callThrough();
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        DummyComponent,
        MockMenuComponent,
        MockMenuHeaderComponent,
        MockMenuButtonComponent,
        MockMenuItemComponent,
        MockIconComponent,
        MockListComponent,
        MockListItemComponent,
        MockBadgeComponent,
        SafeUrlPipe
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'login', component: DummyComponent }
        ]),
        NgReduxTestingModule,
      ],
      providers: [
        DropdownActions,
        ItemActions,
        DropdownService,
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      ajax = TestBed.get(ItemActions);
    });

    MockNgRedux.reset();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('ngOnInit()', () => {

    it('should exist', () => {
      expect(component.ngOnInit).toBeTruthy();
    });

    it('should have dispatch ajax call to retrieve single user', async(() => {
      component.ngOnInit();
      expect(spyDispatch).toHaveBeenCalledWith(ajax.loadItem(ITEM_TYPES.USER));
    }));
  });

});
