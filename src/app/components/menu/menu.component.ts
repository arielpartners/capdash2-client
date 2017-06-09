import {
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cd-menu',
  styleUrls: ['./menu.component.less'],
  template: `
    <div [class.show]="(isToggled$ | async) && ((selectedDropdown$ | async) == (_triggerBy))"
         [ngClass]="_classList"
         class="dropdown-menu">
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})

export class MenuComponent {

  @select(['header', 'isToggled']) readonly isToggled$: Observable<boolean>;
  @select(['header', 'selectedDropdown']) readonly selectedDropdown$: Observable<string>;

  private _triggerBy: string;

  @Input()
  get triggerBy() { return this._triggerBy; }
  set triggerBy(menuID: string) {
    this._triggerBy = `${menuID}-checkbox`;
  }

  _classList: any = {};
  @Input('className')
  set classList(classes: string) {
    this._classList = classes.split(' ').reduce((obj: any, className: string) => {
      obj[className] = true;
      return obj;
    }, {});
  }
}

@Component({
  selector: 'cd-menu-header',
  template: `
    <h4 class="dropdown-header">
      <i [ngClass]="icon" *ngIf="icon"></i>
      {{text}}
    </h4>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class MenuHeaderComponent {
  @Input() icon: string;
  @Input() text: string;
}
