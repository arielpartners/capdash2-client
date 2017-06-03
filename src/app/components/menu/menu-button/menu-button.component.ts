import {Component, Input, HostBinding} from '@angular/core';
import {MenuService} from '../../../services/menu/menu.service';

@Component({
  selector: 'cd-menu-button',
  template: `
    <label  [for]="inputId"
            [ngClass]="_classList"
            class="dropdown-toggle text-white">
      <ng-content></ng-content>
    </label>
    <input type="radio" class="radio-hack"
           [id]="inputId"
           [name]="name"
           (click)="onInputClick($event)">
  `,
  styleUrls: ['./menu-button.component.less']
})

export class MenuButtonComponent {

  /** The unique ID for this button toggle. */
  @HostBinding()
  @Input() id: string;
  @Input() name: string;

  _classList: any = {};

  constructor(public menu: MenuService) {}

  get inputId(): string {
    return `${this.id}-checkbox`;
  }

  onInputClick(e): void {
    this.menu.toggleDropdown(e);
  }

  @Input('className')
  set classList(classes: string) {
    this._classList = classes.split(' ').reduce((obj: any, className: string) => {
      obj[className] = true;
      return obj;
    }, {});
    // set given ID to classList
    this._classList[this.id] = true;
  }
}
