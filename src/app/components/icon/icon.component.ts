import {
  Component,
  Input,
  Directive,
  HostBinding,
  ViewEncapsulation, OnInit, ElementRef, Renderer2
} from '@angular/core';
import { LocationPathType } from '../../core/utils/common.types';
import { Location } from '@angular/common';

// Todo: create directive which manipulates background color of icon
// Todo: create component which renders thumbnail image

@Directive({
  selector: '[cdTextInverse]'
})
export class TextInverseCssDirective {
  @HostBinding('class.text-inverse') private textInverse: boolean;
  constructor(){
    this.textInverse = true;
  }
}

/*
 * -----------------------
 * ActiveLocationDirective
 * -----------------------
 * This directive allow user to change class according to location link
 * while out of the box routeActiveLink directive can add class when active,
 * this directive will replace classname
 * TODO: This might directive could be more universal, consider moving to other location
 *
 */
@Directive({
  selector: '[cdActiveLocation]'
})
export class ActiveLocationCssDirective implements OnInit {

  @Input() activeUrl: string;
  @Input() activeClass: string;
  private currentLocation: LocationPathType;
  public isActive: boolean;

  constructor(
    private location: Location,
    private el: ElementRef,
  ) {
    this.currentLocation = this.getCurrentLocation();
    this.isActive = false;
  }
  ngOnInit() {
    this.setClass();
  }
  getCurrentLocation() {
    return {
      protocol: window.location.protocol,
      host: window.location.host,
      origin: window.location.origin,
      path: this.location.path()
    };
  }
  setClass() {
    if (this.currentLocation.origin === this.activeUrl) {
      this.el.nativeElement.classList.remove('fa-angle-right');
      this.el.nativeElement.classList.add(this.activeClass);
      this.isActive = true;
    } else {
      this.el.nativeElement.classList.add('fa-angle-right');
      this.el.nativeElement.classList.remove(this.activeClass);
      this.isActive = false;
    }
  }
}


/*
 * -------------
 * IconComponent
 * -------------
 */
@Component({
  selector: 'cd-icon',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./icon.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent {
  _classList: any = {};
  /**
   * This method takes classes set on the host cd-icon element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  @Input('class')
  set classList(classes: string) {
    this._classList = classes.split(' ').reduce((obj: any, className: string) => {
      obj[className] = true;
      return obj;
    }, {});
  }
}
