import { Injectable } from '@angular/core';

@Injectable()
export class HeaderActions {
  static readonly TOGGLE = 'TOGGLE';

  openToggle(menuId) {
    // console.log(`HeaderActions | openToggle(${menuId})`);
    return {
      type: HeaderActions.TOGGLE,
      payload: {
        isToggled: true,
        selectedDropdown: menuId
      }
    };
  }

  closeToggle() {
    // console.log('HeaderActions | closeToggle()');
    return {
      type: HeaderActions.TOGGLE,
      payload: {
        isToggled: false,
        selectedDropdown: ''
      }
    };
  }
}
