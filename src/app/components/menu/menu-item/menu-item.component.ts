import {
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'cd-menu-item',
  template: `
    <ng-container>
      <a [href]="link" cdCloseToggle>
        <ng-content></ng-content>
      </a>
    </ng-container>
  `,
  styleUrls: ['./menu-item.component.less'],
  encapsulation: ViewEncapsulation.None,
})

export class MenuItemComponent {
  @Input() link: string;
}
