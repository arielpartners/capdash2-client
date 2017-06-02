import { Directive, HostListener } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[cdLogoutBtn]'
})

export class LogoutButtonDirective {
  constructor(
    private service: AuthService
  ) {}

  @HostListener('click') onClick() {
    this.service.logout();
  }
}
