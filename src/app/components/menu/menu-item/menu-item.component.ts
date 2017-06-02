import {
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'cd-menu-item',
  template: `
    <li [ngClass]="_classList">
      <a [href]="link" cdCloseToggle>
        <ng-content></ng-content>
      </a>
    </li>
  `,
  styleUrls: ['./menu-item.component.less'],
  encapsulation: ViewEncapsulation.None,
})

export class MenuItemComponent {

  @Input() link: string;

  _classList: any = {};

  @Input('class')
  set classList(classes: string) {
    this._classList = classes.split(' ').reduce((obj: any, className: string) => {
      obj[className] = true;
      return obj;
    }, {});
  }
}
