import { TestBed, async, inject } from '@angular/core/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { IAppState } from '../../store/root.types';
import { ItemActions } from '../../core/ajax/item/item.actions';
import { ITEM_TYPES } from '../../core/ajax/item/item.types';
import { LOGGED_OUT } from '../../core/core.types';
import { AuthService } from './auth.service';
describe('AuthService', () => {

  const data = require('../../../../json-server/db.json');
  const token = JSON.stringify(data.user_token.jwt);

  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgReduxTestingModule],
      providers: [
        AuthService,
        ItemActions,
        MockNgRedux,
      ]
    });
    MockNgRedux.reset();
  });

  beforeEach(async(inject(
    [AuthService, ItemActions],
    (auth: AuthService, actions: ItemActions) => {
      service = auth;
    })
  ));

  it('should exist', () => {
    expect(service).toBeTruthy();
  });

  describe('get authenticated()', () => {

    beforeEach(() => {
      localStorage.clear();
    });

    it('should return true when token exist', () => {
      localStorage.setItem('reduxPersist:token', token);
      expect(service.authenticated).toBeTruthy();
    });

    it('should return false when token expired', () => {
      expect(service.authenticated).toBeFalsy();
    });
  });

  describe('get token()', () => {

    beforeEach(() => {
      localStorage.clear();
    });

    it('should return token when exist', () => {
      localStorage.setItem('reduxPersist:token', token);
      expect(service.token).toBe(data.user_token.jwt);
    });

    it('should return false when token expired', () => {
      expect(service.token).toBeFalsy();
    });
  });

  describe('login(email, password)', () => {
    it('should dispatch ajax call to retrieve user token', () => {
      const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
      const form = {
        auth: {
          email: 'test@test.com',
          password: '1234'
        }
      };

      service.login(form.auth.email, form.auth.password);

      expect(spy).toHaveBeenCalledWith({
        type: ItemActions.LOAD_STARTED,
        meta: {
          itemType: ITEM_TYPES.TOKEN
        },
        form
      });

    });
  });

  describe('logout()', () => {

    // localStorage.setItem('reduxPersist:token', token);
    it('should clear cached data in local storage', () => {
      spyOn(localStorage, 'clear');
      service.logout();
      expect(localStorage.clear).toHaveBeenCalled();
    });

    it('should dispatch action to empty store', () => {
      const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
      service.logout();
      expect(spy).toHaveBeenCalledWith({type: LOGGED_OUT});
    });
  });

  // Todo: why oh why??
  xdescribe('setAuthorizationBearer()', () => {
    it('should have called XMLHttpRequest to set request header', async(() => {
      const spy = spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
      spyOn(XMLHttpRequest.prototype, 'send');
      localStorage.setItem('reduxPersist:token', token);
      service.setAuthorizationBearer();
      expect(spy).toHaveBeenCalled();
      // expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
    }));

  });
});



