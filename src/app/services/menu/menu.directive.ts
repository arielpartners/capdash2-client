import { Directive, HostListener } from '@angular/core';
import { MenuService } from './menu.service';

@Directive({
  selector: '[cdCloseToggle], [cd-close-toggle], [closeToggle], [close-toggle]'
})

export class CloseToggleDirective {
  constructor(
    public service: MenuService
  ) {}

  @HostListener('click') onClick() {
    this.service.closeToggle();
  }
}


