import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/root.types';
import { MainMenu, NotificationMenu, LanguageMenu, UserMenu } from './header-menu.model';
import { ITEM_TYPES } from '../../core/ajax/item/item.types';
import { ItemActions } from '../../core/ajax/item/item.actions';
import { MenuService } from '../../services/menu/menu.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.less'],
  providers: [
    ItemActions,
    MenuService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnInit {

  @select(['user', 'item', 'name']) readonly userName$: Observable<string>;
  @select(['user', 'item', 'profile_image']) readonly userProfile$: Observable<string>;

  headerMenu: any;
  constructor(
    /* istanbul ignore next */
    private store: NgRedux<IAppState>,
    private ajax: ItemActions,
    public menu: MenuService,
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
