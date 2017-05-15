
import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';
import { ItemService } from './item.service';
import { ITEM_TYPES } from './item.types';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ItemService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should exist', inject([ItemService, XHRBackend], (itemService, mockBackend) => {
    const svc = new ItemService(mockBackend);
    expect(svc).toBeTruthy();
  }));

  it('should return an Observable upon get',
    inject([ItemService, XHRBackend], (itemService, mockBackend) => {

      const mockResponse = 'foo';

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      itemService.get(ITEM_TYPES.INFO).subscribe((item) => {
        expect(item).toEqual('foo');
      });

    }));

  it('should return an Observable upon post',
    inject([ItemService, XHRBackend], (itemService, mockBackend) => {

      const mockResponse = 'foo';

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      itemService.post(ITEM_TYPES.INFO, {}).subscribe((item) => {
        expect(item).toEqual('foo');
      });

    }));
});
