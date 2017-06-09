import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MenuService} from '../../../services/menu/menu.service';

@Component({
  selector: 'cd-menu-button',
  template: `
    <ng-container>
      <label  [for]="inputId"
              [ngClass]="_classList"
              class="dropdown-toggle text-white">
        <ng-content></ng-content>
      </label>
      <input type="radio" class="radio-hack"
             [id]="inputId"
             [name]="name"
             (click)="onInputClick($event)">
    </ng-container>
  `,
  styleUrls: ['./menu-button.component.less'],
  encapsulation: ViewEncapsulation.None,
})

export class MenuButtonComponent {

  private _inputId: string;

  /** The unique ID for this button toggle. */
  // @HostBinding()
  @Input('id')
  get inputId() {
    return `${this._inputId}-checkbox`;
  }
  set inputId(value: string) {
    this._inputId = value;
  }

  @Input() name: string;

  _classList: any = {};

  // Todo: MenuService should be part of this module, but located at app/services
  // Todo: find a way to make this module independent from application, perhaps using redux store for this job is not ideal
  constructor(
    public menu: MenuService
  ) {}

  // get inputId(): string {
  //   return `${this._inputId}-checkbox`;
  // }

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
    this._classList[this.inputId] = true;
  }

}
