import {
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';

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

  @Input() link: string;

  _classList: any = {};
  /**
   * This method takes classes set on the host cd-list-item element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing list-item from outside the component.
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
