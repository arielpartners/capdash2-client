export interface MenuLabelType {
  class?: string;
  color?: string;
  icon: string | ThumbnailType;
  tag?: string;
  text: MenuLabelTextType;
  thumbnail?: ThumbnailType;
  type: string; // enum: ['mini', 'item', 'thumbnail', 'default']
}

export interface ThumbnailType {
  alt?: string;
  height: number;
  src: string;
  width: number;
}

export interface MenuLabelTextType {
  class?: string;
  value: string;
}
