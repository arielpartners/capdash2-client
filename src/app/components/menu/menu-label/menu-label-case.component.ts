import { Component, Input } from '@angular/core';
import { MenuLabelType } from './menu-label.type';

@Component({
  selector: 'cd-default-menu-label',
  template: `
              <i [ngClass]="label.icon"></i>
              {{label.text.value}}
              <b class="caret"></b>
            `
})

export class DefaultMenuLabelComponent {
  @Input() label: MenuLabelType;
  constructor() {}
}


@Component({
  selector: 'cd-mini-menu-label',
  template: `
              <i [ngClass]="label.icon"></i>
              <span [class]="label.text.class">{{label.text.value}}</span>
            `
})

export class MiniMenuLabelComponent {
  @Input() label: MenuLabelType;
  constructor() {}
}

@Component({
  selector: 'cd-item-menu-label',
  template: `
              <span [ngClass]="label.icon" [title]="label.tag"></span>
              <span [ngClass]="label.text.class">{{label.text.value}}</span>
              <b class="caret"></b>
            `
})

export class ItemMenuLabelComponent {
  @Input() label: MenuLabelType;
  constructor() {}
}


/*
 * ThumbnailMenuLabelComponent
 * ---------------------------
 * case (label.type == 'thumbnail')
 * @Input MenuLabelType
 */
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

@Component({
  selector: 'cd-thumbnail-menu-label',
  template: `
              <img
                [src]="(userProfile$ | async) || ''"
                [alt]="label.tag"
                [width]="label.icon.width"
                [height]="label.icon.height">
              <span [ngClass]="label.text.class">{{userName$ | async}}</span>
              <b class="caret"></b>
            `
})

export class ThumbnailMenuLabelComponent {
  @Input() label: MenuLabelType;
  @select(['user', 'item', 'name']) readonly userName$: Observable<string>;
  @select(['user', 'item', 'profile_image']) readonly userProfile$: Observable<string>;
  constructor() {}
}

