import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isDropdown: Boolean = true;

  menu = {
    id: 'media-list-checkbox',
    size: 'sm',
    icon: {
      class: ['fa fa-bell-o', 'text-white']
    },
    item: {
      class: 'media',
      header: {
        thumbnail: null,
        link: 'javascript:',
        icon: ['fa fa-warning', 'media-object', 'bg-red'],
        heading: 'Violations Reports Updated',
        subHeading: '3 minutes ago'
      },
      footer: {}
    },
    items: [
      {
        thumbnail: null,
        link: 'javascript:',
        icon: ['fa fa-warning', 'media-object', 'bg-red'],
        heading: 'Violations Reports Updated',
        subHeading: '3 minutes ago'
      },
      {
        thumbnail: null,
        link: 'javascript:',
        icon: ['fa fa-warning', 'media-object', 'bg-red'],
        heading: 'Violations Reports Updated',
        subHeading: '3 minutes ago'
      },
      {
        thumbnail: null,
        link: 'javascript:',
        icon: ['fa fa-warning', 'media-object', 'bg-red'],
        heading: 'Violations Reports Updated',
        subHeading: '3 minutes ago'
      },
      {
        thumbnail: null,
        link: 'javascript:',
        icon: ['fa fa-warning', 'media-object', 'bg-red'],
        heading: 'Violations Reports Updated',
        subHeading: '3 minutes ago'
      }

    ]
  }

  constructor() { }

  ngOnInit() {
  }

  // types of menu
  // 1. dropdown
  // 2. routelink
  // 3. no menu item??
}

