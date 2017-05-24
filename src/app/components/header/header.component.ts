import { Component, AfterViewInit, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/root.types';
import { ITEM_TYPES } from '../../core/ajax/item/item.types';
import { ItemActions } from '../../core/ajax/item/item.actions';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderActions } from './header.actions';

@Component({
  selector: 'cd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  providers: [HeaderActions, ItemActions],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {

  @Input() isToggled: Observable<boolean>;
  @Input() selectedDropdown: Observable<string>;
  @Input() userName: Observable<string>;
  @Input() userProfile: Observable<string>;

  constructor(
    private store: NgRedux<IAppState>,
    private actions: HeaderActions,
    private ajax: ItemActions,
    private auth: AuthService
  ) {}

  ngAfterViewInit() {
    this.store.dispatch(this.ajax.loadItem(ITEM_TYPES.USER));
  }

  logout() {
    this.auth.logout();
    this.store.dispatch(this.actions.closeToggle());
  }

  toggleDropdown(e) {
    const elem = e ? e.target : undefined,
          header = JSON.parse(localStorage.getItem('reduxPersist:header'));

    const shouldOpen = elem
      ? !header
        ? true
        : !header.isToggled
          ? true
          : header.selectedDropdown !== elem.id
      : false;

    if (shouldOpen) {
      this.store.dispatch(this.actions.openToggle(elem.id));
    } else {
      this.store.dispatch(this.actions.closeToggle());
    }
  }
}
