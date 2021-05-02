import { TestBed } from '@angular/core/testing';

import { PunkyapiService } from './punkyapi.service';

describe('PunkyapiService', () => {
  let service: PunkyapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunkyapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
