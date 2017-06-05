import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveLocationCssDirective, IconComponent, TextInverseCssDirective } from './icon.component';

@NgModule({
  declarations: [IconComponent, TextInverseCssDirective, ActiveLocationCssDirective],
  imports: [
    CommonModule
  ],
  exports: [IconComponent, TextInverseCssDirective, ActiveLocationCssDirective]
})
export class IconModule { }
