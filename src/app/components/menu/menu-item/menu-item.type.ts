import { TextType, ImageType, LinkType, ContainerType, ClassType } from '../../../core/utils/common.types';

// For header main & language & user menu item
interface DefaultItemType {
  icon: ClassType;
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

export interface MenuItemType {
  container: ContainerType;
  list: DefaultItemType[] | NotificationItemType[];
}

