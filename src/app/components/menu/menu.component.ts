import {
  Component,
  Input,
} from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cd-menu',
  styleUrls: ['./menu.component.less'],
  template: `
    <ng-container *ngTemplateOutlet="menuContainer"></ng-container>
    <ng-template #menuContainer>
      <div [class.show]="(isToggled$ | async) && ((selectedDropdown$ | async) == (_triggeredId))"
           [ngClass]="_classList" class="dropdown-menu">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `
})

export class MenuComponent {
  // @Input() classNames: string;
  @Input() triggerBy: string;
  @select(['header', 'isToggled']) readonly isToggled$: Observable<boolean>;
  @select(['header', 'selectedDropdown']) readonly selectedDropdown$: Observable<string>;

  get _triggeredId() {
    return `${this.triggerBy}-checkbox`;
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
  `
})
export class MenuHeaderComponent {
  @Input() icon: string;
  @Input() text: string;
}
