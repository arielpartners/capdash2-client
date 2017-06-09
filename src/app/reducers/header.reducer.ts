import { MenuType } from '../services/menu/menu.type';
import { MenuActions } from '../services/menu/menu.actions';

/* eslint-disable indent */
const initialState: MenuType = {
  isToggled: false,
  selectedDropdown: ''
};

export const header = (state = initialState, { type, payload }) => {
  let newState = Object.assign({}, state);
  switch (type) {
    case MenuActions.TOGGLE:
      newState = payload;
      break;

    default:
      newState = state;
  }

  return newState;
};
