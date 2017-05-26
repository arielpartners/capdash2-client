import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuType } from './menu.type';
import { HeaderMenu } from './model/header-menu.model';

@Component({
  selector: 'cd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isDropdown: Boolean = true;
  menu: MenuType;
  size: string;

  // @Input() menu: Observable<MenuType[]>;
  constructor() {
    this.menu = HeaderMenu;
    this.size = 'large';
  }

  ngOnInit() {
  }

  // Todo: menu direction could be passdown from parent
  // Todo: use Observable to receive data from parent
}

