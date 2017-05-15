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

fdescribe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ItemService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should exist', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable',
    inject([ItemService, XHRBackend], (itemService, mockBackend) => {

      const mockResponse = {
        data: {myType: 'foo'}
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      itemService.get().subscribe((item) => {
        expect(item).toEqual('foo');
      });

    }));
});
