import { TextType, ImageType } from '../../../core/utils/common.types';

export interface MenuLabelType {
  class?: string;
  color?: string;
  icon: string | ImageType;
  tag?: string;
  text: TextType;
  thumbnail?: ImageType;
  type: string; // enum: ['mini', 'item', 'thumbnail', 'default']
}
