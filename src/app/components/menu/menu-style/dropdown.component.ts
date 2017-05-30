import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MenuType, MenuButtonType } from '../menu.type';
import { MenuItemsType, SubMenuItemType } from '../menu-item/menu-item.type';
import { MenuLabelType } from '../menu-label/menu-label.type';
import { ContainerType, LocationPathType } from '../../../core/utils/common.types';

@Component({
  selector: 'cd-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less'],
})

export class DropdownComponent {

  @Input() onClickMenu: void;
  @Input() container: ContainerType;
  @Input() label: MenuLabelType;
  @Input() button: MenuButtonType;
  @Input() items: MenuItemsType;
  @Input() currentLocation: LocationPathType;

  constructor() {}
}





