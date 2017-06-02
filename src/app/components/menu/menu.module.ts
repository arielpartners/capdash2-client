import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule } from '@angular-redux/store';
import { RouterModule } from '@angular/router';
import {MenuComponent, MenuHeaderComponent} from './menu.component';
import { MenuLabelModule } from './menu-label/menu-label.module';

// import { DropdownComponent } from './dropdown/dropdown.component';
// import { BadgeComponent } from './badge/badge.component';


import { MenuActions } from '../../services/menu/menu.actions';
import { MenuService } from '../../services/menu/menu.service';
import { CloseToggleDirective } from '../../services/menu/menu.directive';
import { LogoutButtonDirective } from '../../services/auth/auth.directive';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuHeaderComponent,
    LogoutButtonDirective,
    CloseToggleDirective,
    MenuButtonComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MenuLabelModule,
    NgReduxModule,
    RouterModule
  ],
  providers: [
    MenuService,
    MenuActions,
    AuthService,
  ],
  exports: [
    MenuComponent,
    MenuHeaderComponent,
    MenuButtonComponent,
    CloseToggleDirective ],
})
export class MenuModule {}
