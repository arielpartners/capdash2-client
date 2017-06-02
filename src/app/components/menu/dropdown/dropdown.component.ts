// import { Component, Input } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
//
// import { select } from '@angular-redux/store';
// import { MenuService } from '../menu.service';
// import { MenuButtonType, MenuItemsType } from '../menu.type';
// import { MenuLabelType } from '../menu-label/menu-label.type';
//
// import { ContainerType, LocationPathType } from '../../../core/utils/common.types';
//
// @Component({
//   selector: 'cd-dropdown',
//   templateUrl: './dropdowFn.component.html',
//   styleUrls: ['./dropdown.component.less'],
//   providers: [MenuService]
// })
//
// export class DropdownComponent {
//
//   @Input() onClickMenu: void;
//   @Input() container: ContainerType;
//   @Input() label: MenuLabelType;
//   @Input() button: MenuButtonType;
//   @Input() items: MenuItemsType;
//   @Input() currentLocation: LocationPathType;
//   @select(['header', 'isToggled']) readonly isToggled$: Observable<boolean>;
//   @select(['header', 'selectedDropdown']) readonly selectedDropdown$: Observable<string>;
//
//   constructor(
//     public service: MenuService
//   ) {}
// }
