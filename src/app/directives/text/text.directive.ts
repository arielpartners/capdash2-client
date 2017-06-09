import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[cdTextInverse], [textInverse], [cd-text-inverse], [text-inverse]'
})
export class TextInverseDirective {
  @HostBinding('class.text-inverse') private textInverse: boolean;
  constructor() {
    this.textInverse = true;
  }
}
