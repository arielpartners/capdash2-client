import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from './store/root.types';
import { HeaderActions } from './components/header/header.actions';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [HeaderActions],
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

  constructor(
    private ngRouter: Router,
    private ngRedux: NgRedux<IAppState>,
    private actions: HeaderActions,
    location: Location
  ) {
    this.location = location;
  }

  onClickApp() {
    const header = JSON.parse(localStorage.getItem('reduxPersist:header'));
    if (header && header.isToggled) {
      this.ngRedux.dispatch(this.actions.closeToggle());
    }
  }

  ngAfterViewInit() {
    const token = JSON.parse(localStorage.getItem('reduxPersist:token'));
    const loginUrl = 'login';

    if (!token && this.location.path() !== loginUrl) {
      this.ngRouter.navigate([loginUrl]);
    }

  }
}
