import { Injectable } from '@angular/core';

@Injectable()
export class HeaderActions {
  static readonly TOGGLE = 'TOGGLE';

  openToggle(menuId) {
    return {
      type: HeaderActions.TOGGLE,
      payload: {
        isToggled: true,
        selectedDropdown: menuId
      }
    };
  }

  closeToggle() {
    return {
      type: HeaderActions.TOGGLE,
      payload: {
        isToggled: false,
        selectedDropdown: ''
      }
    };
  }
}
