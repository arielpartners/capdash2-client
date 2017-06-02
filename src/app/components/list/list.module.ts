import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { BadgeComponent } from './badge/badge.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    BadgeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    BadgeComponent
  ]

})
export class ListModule { }
// export * from './list';
