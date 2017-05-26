import { Component, Input } from '@angular/core';
import { MenuLabelType } from './menu-label.type';

@Component({
  selector: 'cd-default-menu-label',
  template: `
              <i [class]="label.icon"></i>
              {{label.value}}
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
              <i [class]="label.icon"></i>
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
              <span [class]="label.icon" [title]="label.tag"></span>
              <span [class]="label.text.class">{{label.text.value}}</span>
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
@Component({
  selector: 'cd-thumbnail-menu-label',
  template: `
              <img
                [src]="label.icon.src"
                [alt]="label.tag"
                [width]="label.icon.width"
                [height]="label.icon.height">
              <span [class]="label.text.class">{{label.text.value}}</span>
              <b class="caret"></b>
            `
})

export class ThumbnailMenuLabelComponent {
  @Input() label: MenuLabelType;
  constructor() {}
}

