import {Component, Input, HostBinding} from '@angular/core';
import {MenuService} from '../../../services/menu/menu.service';

@Component({
  selector: 'cd-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.less']
})

export class MenuButtonComponent {

  /** The unique ID for this button toggle. */
  @HostBinding()
  @Input() id: string;
  @Input() name: string;

  constructor(public menu: MenuService) {}

  get inputId(): string {
    return `${this.id}-checkbox`;
  }

  onInputClick(e): void {
    this.menu.toggleDropdown(e);
  }
}
