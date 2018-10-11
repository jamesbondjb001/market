import { TestBed } from '@angular/core/testing';

import { OrderedProductService } from './ordered-product.service';

describe('OrderedProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderedProductService = TestBed.get(OrderedProductService);
    expect(service).toBeTruthy();
  });
});
