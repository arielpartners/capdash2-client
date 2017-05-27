// import { Type } from '@angular/core';

import { MenuLabelType } from './menu-label/menu-label.type';

import { ContainerType, ImageType } from '../../core/utils/common.types';

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
  container: ContainerType;
  itemWrapper: ContainerType;
  class?: string;
  size?: string;
  type: string;
  label: MenuLabelType;
  button: MenuButtonType;
  submenu?: SubMenuType[];
  items?: MenuItemType[];
}




