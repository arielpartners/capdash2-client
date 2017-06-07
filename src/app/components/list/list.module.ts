import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent, NavListCssDirective} from './list.component';
import { BadgeComponent } from './badge/badge.component';
import { ListItemComponent } from './list-item/list-item.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    BadgeComponent,
    NavListCssDirective
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    BadgeComponent,
    NavListCssDirective
  ]

})
export class ListModule { }
// export * from './list';
