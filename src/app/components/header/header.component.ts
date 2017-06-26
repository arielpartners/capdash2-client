import { Component, ChangeDetectionStrategy, OnInit, ViewEncapsulation } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/root.types';
import { MainMenu, NotificationMenu, LanguageMenu, UserMenu } from './header-menu.model';
import { ITEM_TYPES } from 'dhs-common-module/src/lib/ajax/item/item.types';
import { ItemActions } from 'dhs-common-module/src/lib/ajax/item/item.actions';
import { Observable } from 'rxjs/Observable';
import { DropdownService } from 'dhs-common-module/src/lib/menu';

@Component({
  selector: 'cd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.less'],
  providers: [
    ItemActions,
    DropdownService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class HeaderComponent implements OnInit {

  @select(['user', 'item', 'name']) readonly userName$: Observable<string>;
  @select(['user', 'item', 'profile_image']) readonly userProfile$: Observable<string>;

  headerMenu: any;
  constructor(
    /* istanbul ignore next */
    private store: NgRedux<IAppState>,
    private ajax: ItemActions,
    public menu: DropdownService,
  ) {
    this.headerMenu = {
      main: MainMenu,
      notification: NotificationMenu,
      language: LanguageMenu,
      user: UserMenu
    };
  }

  ngOnInit() {
    this.store.dispatch(this.ajax.loadItem(ITEM_TYPES.USER));
  }
}
