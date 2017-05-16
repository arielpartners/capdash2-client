import {Component, ChangeDetectionStrategy, AfterViewInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import {Router} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
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

  constructor(
    private ngRouter: Router,
    location: Location
  ) {
    this.location = location;
  }

  ngAfterViewInit() {
    const token = JSON.parse(localStorage.getItem('reduxPersist:token'));
    const loginUrl = 'login';

    console.log('ngAfterViewInit()', token, this.location.path());
    if (!token && this.location.path() !== loginUrl) {
      console.log('REDIRECT TO LOGIN')
      this.ngRouter.navigate([loginUrl]);
    }

  }
}
