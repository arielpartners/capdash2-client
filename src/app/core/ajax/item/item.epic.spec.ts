import {TestBed, inject} from '@angular/core/testing';
import 'rxjs/Rx';
import {expectEpic} from 'redux-observable-test-helpers';
import {ItemEpics} from './item.epics';
import {ITEM_TYPES} from './item.types';
import {ItemActions} from './item.actions';
import {ItemService} from './item.service';
import sinon from 'sinon';

// import {ItemService} from './item.service';

const itemService = new ItemService(null);

const itemActions = new ItemActions();

describe('Item Epics', () => {
  let itemEpic;

  beforeEach(() => {
    itemEpic = new ItemEpics(itemService, itemActions);
  });

  it('should load items', () => {
    const loadItemEpic = itemEpic.createLoadItemEpic(ITEM_TYPES.INFO);
    expect(loadItemEpic).toBeTruthy();

    const response = ['Error'];

    expectEpic(loadItemEpic, {
      expected: ['-a', {
        a: {type: 'test', payload: {error: 'error'}}
      }],
      action: ['(a)', {a: itemActions.loadItem(ITEM_TYPES.INFO)}],
      response: ['-#', {a: response}]
    });
  });
});
