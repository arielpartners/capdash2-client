import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { TokenReducer } from 'dhs-common-module/src/lib/auth/token/token.reducer';
import { createItemReducer } from 'dhs-common-module/src/lib/ajax/item/item.reducer';
import { ITEM_TYPES } from 'dhs-common-module/src/lib/ajax/item/item.types';
import { DropdownReducer } from 'dhs-common-module/src/lib/menu';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    info: createItemReducer(ITEM_TYPES.INFO),
    user: createItemReducer(ITEM_TYPES.USER),
    router: routerReducer,
    token: TokenReducer,
    header: DropdownReducer
}));
