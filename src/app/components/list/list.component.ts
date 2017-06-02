import { Component, Input } from '@angular/core';

@Component({
  selector: 'cd-list',
  template: `
    <ng-container *ngTemplateOutlet="listContainer"></ng-container>
    <ng-template #listContainer>
      <ul [ngClass]="_classList">
        <ng-content></ng-content>
      </ul>
    </ng-template>
  `,
  styleUrls: ['./list.component.less']
})
export class ListComponent {
  _classList: any = {};

  @Input('class')
  set classList(classes: string) {
    this._classList = classes.split(' ').reduce((obj: any, className: string) => {
      obj[className] = true;
      return obj;
    }, {});
  }
}
