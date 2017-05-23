import { HeaderType } from '../components/header/header.type';
import { HeaderActions } from '../components/header/header.actions';
// import { ItemActions } from '../core/ajax/item/item.actions';

/* eslint-disable indent */
const initialState: HeaderType = {
  isToggled: false,
  selectedDropdown: ''
};

export const header = (state = initialState, { type, payload }) => {
  let newState = Object.assign({}, state);
  switch (type) {
    case HeaderActions.TOGGLE:
      newState = payload;
      break;

    default:
      newState = state;
  }

  return newState;
};
