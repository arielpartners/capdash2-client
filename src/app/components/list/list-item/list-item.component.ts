import {
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { LocationPathType } from '../../../core/utils/common.types';
import { Location } from '@angular/common';

@Component({
  selector: 'cd-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemComponent {

  @Input() classNames: string;
  @Input() link: string;

  public currentLocation: LocationPathType;

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

}
