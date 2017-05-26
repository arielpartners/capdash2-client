import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuLabelComponent } from './menu-label.component';
import {
  DefaultMenuLabelComponent,
  MiniMenuLabelComponent,
  ItemMenuLabelComponent,
  ThumbnailMenuLabelComponent
} from './menu-label-case.component';

@NgModule({
  declarations: [
    MenuLabelComponent,
    DefaultMenuLabelComponent,
    MiniMenuLabelComponent,
    ItemMenuLabelComponent,
    ThumbnailMenuLabelComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [ MenuLabelComponent ],
})
export class MenuLabelModule {}
