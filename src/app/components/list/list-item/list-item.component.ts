import {
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { LocationPathType } from '../../../core/utils/common.types';
import { Location } from '@angular/common';

@Component({
  selector: 'cd-list-item',
  template: `
    <li [ngClass]="_classList">
      <a [href]="link" class="text-ellipsis text-black" cdCloseToggle>
        <ng-content></ng-content>
      </a>
    </li>
  `,
  styleUrls: ['./list-item.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemComponent {

  // @Input() classNames: string;
  @Input() link: string;

  public currentLocation: LocationPathType;
  _classList: any = {};

  constructor(
    private location: Location
  ) {
    this.currentLocation = {
      protocol: window.location.protocol,
      host: window.location.host,
      origin: window.location.origin,
      path: location.path()
    };
  }


  /**
   * This method takes classes set on the host cd-icon element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  @Input('className')
  set classList(classes: string) {
    this._classList = classes.split(' ').reduce((obj: any, className: string) => {
      obj[className] = true;
      return obj;
    }, {});
  }
}
