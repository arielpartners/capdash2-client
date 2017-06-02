import { Directive, HostListener } from '@angular/core';
import { MenuService } from './menu.service';

@Directive({
  selector: '[cdCloseToggle]'
})

export class CloseToggleDirective {
  constructor(
    public service: MenuService
  ) {}

  @HostListener('click') onClick() {
    this.service.closeToggle();
  }
}


