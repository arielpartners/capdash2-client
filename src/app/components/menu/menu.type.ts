export interface MenuLabelType {
  icon: string;
  title: string;
}

export interface MenuButtonType {
  id: string;
  type: string;
  name: string;
}

export interface SubMenuItemType {
  name: string;
  link: string;
}

export interface SubMenuType {
  name: string;
  icon: string;
  class: string;
  itemsType: string;
  items: SubMenuItemType[];
}

export interface MenuType {
  label: MenuLabelType;
  button: MenuButtonType;
  submenu: SubMenuType[];

}
