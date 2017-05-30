// import { Type } from '@angular/core';

import { MenuLabelType } from './menu-label/menu-label.type';
import { MenuItemsType } from './menu-item/menu-item.type';

import { ContainerType, ImageType } from '../../core/utils/common.types';

export interface MenuButtonType {
  id: string;
  type: string;
  name: string;
}

export interface MenuType {
  container: ContainerType;
  class?: string;
  label: MenuLabelType;
  button: MenuButtonType;
  // submenu?: SubMenuType[];
  items: MenuItemsType;
}




