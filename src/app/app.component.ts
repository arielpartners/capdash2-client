import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth/auth.service';
import { DropdownService } from 'capdash2-common-module/src/lib/menu';
// import { MenuService } from './services/menu/menu.service';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [
    AuthService,
    DropdownService
  ],
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
    private auth: AuthService,
    public menu: DropdownService,
    location: Location
  ) {
    this.location = location;
  }

  ngAfterViewInit() {
    const token = JSON.parse(localStorage.getItem('reduxPersist:token'));
    const loginUrl = 'login';
    if (!token && this.location.path() !== loginUrl) {
      this.ngRouter.navigate([loginUrl]);
    } else {
      this.auth.setAuthorizationBearer();
    }
  }
}
