import { TestBed } from '@angular/core/testing';

import { ShopperApiServiceService } from './shopper-api-service.service';

describe('ShopperApiServiceService', () => {
  let service: ShopperApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopperApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
