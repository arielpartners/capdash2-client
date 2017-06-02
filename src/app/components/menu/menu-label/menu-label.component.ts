import { Component, Input } from '@angular/core';
import { MenuLabelType } from './menu-label.type';

@Component({
  selector: 'cd-menu-label',
  templateUrl: './menu-label.component.html',
  styleUrls: ['menu-label.component.less'],
})
export class MenuLabelComponent {

  @Input() label: MenuLabelType;
  @Input() for: string;

  constructor() {}
}
