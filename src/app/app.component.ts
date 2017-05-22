import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from './store/root.types';
import { ITEM_TYPES } from './core/ajax/item/item.types';
import { ItemActions } from './core/ajax/item/item.actions';
import { HeaderActions } from './components/header/header.actions';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [HeaderActions, ItemActions],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  title = 'cd works!';
  location: Location;

  @select(['router']) readonly route$: Observable<string>;
  @select(['token']) readonly token$: Observable<string>;
  @select(['info', 'item', 'version']) readonly version$: Observable<string>;
  @select(['info', 'loading']) readonly loading$: Observable<boolean>;
  @select(['info', 'error']) readonly error$: Observable<any>;
  @select(['header', 'isToggled']) readonly isToggled$: Observable<boolean>;
  @select(['header', 'selectedDropdown']) readonly selectedDropdown$: Observable<string>;
  @select(['user', 'item', 'name']) readonly userName$: Observable<string>;
  @select(['user', 'item', 'profile_image']) readonly userProfile$: Observable<string>;

  constructor(
    private ngRouter: Router,
    private ngRedux: NgRedux<IAppState>,
    private headerActions: HeaderActions,
    private actions: ItemActions,
    location: Location
  ) {
    this.location = location;
  }

  onClickApp() {
    const header = JSON.parse(localStorage.getItem('reduxPersist:header'));
    if (header && header.isToggled) {
      this.ngRedux.dispatch(this.headerActions.closeToggle());
    }
  }

  setRequestHeader(token) {
   (function(open) {
      XMLHttpRequest.prototype.open = function () {
        open.apply(this, arguments);
        this.setRequestHeader('Authorization', 'Bearer ' + token);
      };
    })(XMLHttpRequest.prototype.open);
  }

  ngAfterViewInit() {
    const token = JSON.parse(localStorage.getItem('reduxPersist:token'));
    const loginUrl = 'login';

    if (!token && this.location.path() !== loginUrl) {
      this.ngRouter.navigate([loginUrl]);
    } else {
      this.setRequestHeader(token);
      this.ngRedux.dispatch(this.actions.loadItem(ITEM_TYPES.USER));
    }

  }
}
