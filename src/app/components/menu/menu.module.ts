import { NgModule } from '@angular/core';
// Question: Do I need BrowserModule for this module?
// import { BrowserModule } from '@angular/platform-browser';
// Question: Do I need NgbModule for this module?
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    // BrowserModule,
    // NgbModule
  ]
})
export class MenuModule {}
