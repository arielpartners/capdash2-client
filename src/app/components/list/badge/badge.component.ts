import { Component, Input } from '@angular/core';

@Component({
  selector: 'cd-badge',
  template: `
    <span class="badge"
          [class.pull-right]="right"
          [ngClass]="'badge-'+status">
          {{value}}
    </span>
  `
})

export class BadgeComponent {

  @Input() status: string;
  @Input() value: string | number | void;
  @Input() right: boolean;

  constructor() {}


}
