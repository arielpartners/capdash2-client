import { TextType, ImageType, LinkType, ContainerType, ClassType } from '../../../core/utils/common.types';

// For header main & language & user menu item
interface DefaultItemType {
  icon?: ClassType;
  text: TextType;
  link: LinkType;
  badge?: string;
}

// For notification menu item
interface NotificationItemType {
  icon: ClassType | ImageType;
  link: LinkType;
  body: NoitificationBodyType
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

