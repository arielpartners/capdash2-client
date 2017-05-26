import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cd-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

// Todo: menu item should render html according to it's type

/*
 * ==================
 * types of menu item
 * ==================
 * header, item, footer
 * all of them has text and link
 * for notification header,
 * there is number of notification,
 * however, we could pass down calculated value
 */
  constructor() { }

  ngOnInit() {
  }
}

