import { Component, Input } from '@angular/core';

@Component({
  selector: 'cd-list',
  template: `
    <ng-container *ngTemplateOutlet="listContainer"></ng-container>
    <ng-template #listContainer>
      <ul [ngClass]="classNames">
        <ng-content></ng-content>
      </ul>
    </ng-template>
  `,
  styleUrls: ['./list.component.less']
})
export class ListComponent {
  @Input() classNames: string;
}
