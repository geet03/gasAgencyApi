import { TestBed, inject } from '@angular/core/testing';

import { DeliveryBoyService } from './delivery-boy.service';

describe('DeliveryBoyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryBoyService]
    });
  });

  it('should be created', inject([DeliveryBoyService], (service: DeliveryBoyService) => {
    expect(service).toBeTruthy();
  }));
});
