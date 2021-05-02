import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PunkyapiService } from '../punkyapi/punkyapi.service';

import { BeerComponent } from './beer.component';

const fakeActivatedRoute = {
  snapshot: { paramMap: { get:function(id:string) { return '1'; } } }
} as ActivatedRoute;

describe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerComponent ],
      imports: [HttpClientModule, MatSnackBarModule],
      providers: [
        {provide:ActivatedRoute, useValue: fakeActivatedRoute },
        PunkyapiService,
        HttpClient
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
