import { Injectable } from '@angular/core';

@Injectable()
export class MenuActions {
  static readonly TOGGLE = 'TOGGLE';

  openToggle(menuId) {
    return {
      type: MenuActions.TOGGLE,
      payload: {
        isToggled: true,
        selectedDropdown: menuId
      }
    };
  }

  closeToggle() {
    return {
      type: MenuActions.TOGGLE,
      payload: {
        isToggled: false,
        selectedDropdown: ''
      }
    };
  }
}
