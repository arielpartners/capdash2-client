import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLabelComponent } from './menu-label.component';
import {CommonModule} from '@angular/common';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {BrowserTestingModule} from '@angular/platform-browser/testing';
import {
  DefaultMenuLabelComponent, ItemMenuLabelComponent, MiniMenuLabelComponent,
  ThumbnailMenuLabelComponent
} from './menu-label-case.component';
import {Component} from '@angular/core';
import {MenuLabelType} from './menu-label.type';
import {MenuLabelModule} from './menu-label.module';



fdescribe('MenuLabelComponent', () => {



  // Testing four menu label case
  // default, mini, item, thumbnail

  const testCases = [
    {
      class: 'label-class',
      icon: 'icon-class',
      text: {
        value: 'DEFAULT LABEL'
      },
      type: 'default'
    },
    {
      class: 'label-class',
      icon: 'icon-class',
      text: {
        value: 'MINI LABEL',
        class: 'inline-class'
      },
      type: 'mini'
    },
    {
      class: 'label-class',
      icon: 'icon-class',
      text: {
        value: 'ITEM LABEL',
        class: 'inline-class'
      },
      type: 'default',
      tag: 'label-tag'
    },
    {
      class: 'label-class',
      icon: {
        src: null,
        width: 30,
        height: 30,
      },
      text: {
        value: 'ITEM LABEL',
        class: 'inline-class'
      },
      type: 'thumbnail',
      tag: 'thumbnail-tag'
    },
  ];

  testCases.forEach(testCase => {

    const menuType = testCase.type.replace(/^(.)|\s(.)/g, ($1) => ($1.toUpperCase()));

    describe(`${menuType}MenuLabelComponent should render when label type is '${testCase.type}'`, () => {

      @Component({
        template: `<cd-menu-label [label]="label" [for]="labelFor"></cd-menu-label>`
      })

      class MenuLabelWrapperComponent {
        label: any = testCase;
        labelFor = 'some-menu';
      }

      let component: MenuLabelWrapperComponent;
      let fixture: ComponentFixture<MenuLabelWrapperComponent>;

      beforeEach(async(() => {

        TestBed.configureTestingModule({
          declarations: [
            MenuLabelWrapperComponent,
            MenuLabelComponent,
            DefaultMenuLabelComponent,
            MiniMenuLabelComponent,
            ItemMenuLabelComponent,
            ThumbnailMenuLabelComponent,
          ],
          imports: [
            CommonModule,
            BrowserTestingModule,
            BrowserDynamicTestingModule,
            // MenuLabelModule
          ]
        }).compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(MenuLabelWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should be created', () => {
        expect(component).toBeTruthy();
      });

    });

  });

});
