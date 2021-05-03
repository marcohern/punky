import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { PunkyapiModule } from './punkyapi.module';

import { PunkyapiService } from './punkyapi.service';

describe('PunkyapiService', () => {
  let service: PunkyapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule],
      providers: [
        HttpClient
      ]
  });
    service = TestBed.inject(PunkyapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#should get beer 1', (done: DoneFn) => {
    service.getBeer('1').subscribe(value => {
      expect(value[0].id).toBe(1);
      done();
    });
  });

  it('#should find a list of beers', (done: DoneFn) => {
    service.query({beer_name: 'Maria'}).subscribe(value => {
      expect(value.length).toBeGreaterThan(0);
      done();
    });
  });
});
