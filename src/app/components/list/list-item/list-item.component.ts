import {
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

// this component should behave as li tag
@Component({
  selector: 'cd-list-item',
  template: `
    <ng-container>
      <a [href]="link" class="text-ellipsis text-black">
        <ng-content></ng-content>
      </a>
    </ng-container>
  `,
  styleUrls: ['./list-item.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemComponent {
  @Input() link: string;
}
