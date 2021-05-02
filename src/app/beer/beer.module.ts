import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { PunkyapiModule } from '../punkyapi/punkyapi.module';

import { BeerComponent } from './beer.component';


@NgModule({
  declarations: [
    BeerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    RouterModule,
    PunkyapiModule
  ],
  exports: [
    BeerComponent
  ]
})
export class BeerModule { }
