// import { Type } from '@angular/core';

import { MenuLabelType } from './menu-label/menu-label.type';

export interface MenuButtonType {
  id: string;
  type: string;
  name: string;
}

export interface MenuItemType {
  name: string;
  link: string;
  badge?: string;
}

export interface SubMenuType {
  name: string;
  icon: string;
  class: string;
  itemsType: string;
  items: MenuItemType[];
}

export interface MenuType {
  class?: string;
  type: string;
  label: MenuLabelType;
  button: MenuButtonType;
  submenu?: SubMenuType[];
  items?: MenuItemType[];
}
