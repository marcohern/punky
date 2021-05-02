import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PunkyapiModule } from './punkyapi.module';

import { PunkyapiService } from './punkyapi.service';

describe('PunkyapiService', () => {
  let service: PunkyapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule],
  });
    service = TestBed.inject(PunkyapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get beer 1', () => {
    service.getBeer('1').subscribe(data => {
      expect(data.id).toBe('1');
    });
  })
});
