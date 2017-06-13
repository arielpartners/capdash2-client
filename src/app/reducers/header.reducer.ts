// import { MenuType } from '../services/menu/menu.type';
// import { MenuActions } from '../services/menu/menu.actions';
import { DropdownActions } from 'capdash2-common-module/src/lib/menu/dropdown/dropdown.actions';
import { DropdownStateType } from 'capdash2-common-module/src/lib/menu/dropdown/dropdown.type';

/* eslint-disable indent */
const initialState: DropdownStateType = {
  isToggled: false,
  selectedDropdown: ''
};

export const header = (state = initialState, { type, payload }) => {
  let newState = Object.assign({}, state);
  switch (type) {
    case DropdownActions.TOGGLE:
      newState = payload;
      break;

    default:
      newState = state;
  }

  return newState;
};
