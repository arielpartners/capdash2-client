// import { Type } from '@angular/core';

import { MenuLabelType } from './menu-label/menu-label.type';
import { TextType, ImageType, LinkType, ContainerType, ClassType, BadgeType } from '../../core/utils/common.types';

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

interface DefaultItemType {
  icon?: ClassType;
  text: TextType;
  link: LinkType;
  badge?: BadgeType;
}

interface NotificationItemType {
  icon: ClassType | ImageType;
  link: LinkType;
  body: NoitificationBodyType;
}

interface NoitificationBodyType {
  heading: TextType;
  text: TextType;
  time: TextType;
}

export interface SubMenuItemType {
  name: string;
  icon: string;
  class: string;
  type?: string;
  items: MenuItemsType;
}
export interface MenuItemsType {
  type: string;
  container?: ContainerType;
  list: DefaultItemType[] | NotificationItemType[] | SubMenuItemType[];
}

