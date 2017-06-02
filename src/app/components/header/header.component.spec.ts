import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/root.types';
import { ITEM_TYPES } from '../../core/ajax/item/item.types';
import { ItemActions } from '../../core/ajax/item/item.actions';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderComponent } from './header.component';
import { MenuActions } from '../../services/menu/menu.actions';
import { MenuService } from '../../services/menu/menu.service';

describe('HeaderComponent', () => {

  @Component({
    template: ''
  })

  class DummyComponent { }

  let spyDispatch;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: NgRedux<IAppState>;
  let actions: MenuActions;
  let ajax: ItemActions;
  let auth: AuthService;
  let menu: MenuService;

  beforeEach(async(() => {
    spyDispatch = spyOn(MockNgRedux.mockInstance, 'dispatch').and.callThrough();
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        DummyComponent,
        MockComponent({
          selector: 'cd-menu',
          inputs: ['menu', 'type'],
          outputs: ['menu', 'type'],
        }),
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'login', component: DummyComponent }
        ]),
        NgReduxTestingModule
      ],
      providers: [
        MenuActions,
        ItemActions,
        AuthService,
        MenuService,
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;

      // Inject dependencies
      // https://angular.io/docs/ts/latest/guide/testing.html#!#component-with-async-service
      auth = fixture.debugElement.injector.get(AuthService);
      store = TestBed.get(NgRedux);
      actions = TestBed.get(MenuActions);
      ajax = TestBed.get(ItemActions);
      menu = TestBed.get(MenuService);
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
