import {Injectable} from '@angular/core';

// Todo: dhs-common-module AjaxItem module Type, Actions, Epic path can be combine as 'dhs-common-module/src/lib/ajax/item/'.
import {ITEM_TYPES} from 'dhs-common-module/src/lib/ajax/item/item.types';
import {ItemActions} from 'dhs-common-module/src/lib/ajax/item/item.actions';
import {ItemEpics} from 'dhs-common-module/src/lib/ajax/item/item.epics';

@Injectable()
export class RootEpics {
  constructor(private itemEpics: ItemEpics) {
  }

  public createEpics() {
    return [
      this.itemEpics.createEpic(ITEM_TYPES.INFO),
      this.itemEpics.createEpic(ITEM_TYPES.TOKEN),
      this.itemEpics.createEpic(ITEM_TYPES.USER),
      this.itemEpics.createSimpleEpic({
        action: {
          type: '@angular-redux/router::UPDATE_LOCATION',
          payload: '/'
        },
        filter: 'jwt',
        trigger: ItemActions.LOAD_SUCCEEDED
      }),
    ];
  }
}
