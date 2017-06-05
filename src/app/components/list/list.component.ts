import { Component, Input } from '@angular/core';

@Component({
  selector: 'cd-list',
  template: `
      <ul [ngClass]="_classList">
        <ng-content></ng-content>
      </ul>
  `,
  styleUrls: ['./list.component.less']
})
export class ListComponent {
  _classList: any = {};

  @Input('className')
  set classList(classes: string) {
    this._classList = classes.split(' ').reduce((obj: any, className: string) => {
      obj[className] = true;
      return obj;
    }, {});
  }
}
