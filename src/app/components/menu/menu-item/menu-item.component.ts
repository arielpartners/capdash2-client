import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItemType } from './menu-item.type';
import { TextType, ImageType, LinkType, ContainerType, ClassType } from '../../../core/utils/common.types';

@Component({
  selector: 'cd-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less']
})

export class MenuItemComponent {

  @Input() icon: ClassType | ImageType;
  @Input() text: TextType;
  @Input() link: LinkType;
  @Input() badge: string;
  @Input() onClickItem: void;

  constructor() { }
}

