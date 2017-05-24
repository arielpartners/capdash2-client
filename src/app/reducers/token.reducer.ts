import { ItemActions } from '../core/ajax/item/item.actions';
import { LOGGED_OUT } from '../core/core.types';
// -------------------------------------------------------------------
// TOKEN STORE
// -------------------------------------------------------------------
/* eslint-disable indent */
export const token = (state = null, {type, payload}) => {
  let jwt;
  switch (type) {

    case ItemActions.LOAD_SUCCEEDED:
      if (payload.jwt) {
        jwt = payload.jwt;
      } else {
        jwt = state;
      }
      break;

    case LOGGED_OUT:
      jwt = null;
      break;

    default:
      jwt = state;
  }

  return jwt;
};
