import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PunkyapiService } from '../punkyapi/punkyapi.service';

import { ChartComponent } from './chart.component';

const fakeActivatedRoute = {
  snapshot: { paramMap: { get:function(id:string) { return '1'; } } }
} as ActivatedRoute;

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartComponent ],
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
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
