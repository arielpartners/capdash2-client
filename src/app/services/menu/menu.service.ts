import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/root.types';
import { MenuActions } from './menu.actions';



@Injectable()
export class MenuService {

  constructor(
    private store: NgRedux<IAppState>,
    private menu: MenuActions
  ) {}

  closeToggle() {
    this.store.dispatch(this.menu.closeToggle());
  }

  openToggle(menuId) {
    this.store.dispatch(this.menu.openToggle(menuId));
  }

  toggleDropdown(e) {
    const elem = e ? e.target : undefined,
      state = JSON.parse(localStorage.getItem(`reduxPersist:header`));

    const shouldOpen = elem
      ? !state
        ? true
        : !state.isToggled
          ? true
          : state.selectedDropdown !== elem.id
      : false;

    if (shouldOpen) {
      this.openToggle(elem.id);
    } else {
      this.closeToggle();
    }
  }
}
