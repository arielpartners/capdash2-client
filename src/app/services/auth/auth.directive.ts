import { Directive, HostListener } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[cdLogoutBtn], [cd-logout-btn], [logoutBtn], [logout-btn]'
})

export class LogoutButtonDirective {
  constructor(
    private service: AuthService
  ) {}

  @HostListener('click') onClick() {
    this.service.logout();
  }
}
