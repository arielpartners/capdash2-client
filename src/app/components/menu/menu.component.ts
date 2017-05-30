import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuType } from './menu.type';

// requires location to identify current location,
// we might need route module at some point to make menus that has routelink feature as well
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

interface LocationPathType {
  protocol: string;
  host: string;
  origin: string;
  path: string;
}

@Component({
  selector: 'cd-dropdown',
  templateUrl: './menu.component.html',
})
export class DropdownComponent {

}

@Component({
  selector: 'cd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
})

export class MenuComponent implements OnInit {

  @Input() menu: MenuType;
  @Input() type: string;

  isDropdown: Boolean = true;
  size: string;

  currentLocation: LocationPathType;
  location: Location;
  // @Input() menu: Observable<MenuType[]>;
  constructor(location: Location) {
    // this.menu = HeaderMenu;
    this.size = 'large';
    this.location = location;
    this.currentLocation = {
      protocol: window.location.protocol,
      host: window.location.host,
      origin: window.location.origin,
      path: location.path()
    };

    console.log(this.currentLocation);
  }

  ngOnInit() {
  }

  // Todo: menu direction could be passdown from parent
  // Todo: use Observable to receive data from parent
}



