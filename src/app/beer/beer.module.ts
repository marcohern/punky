import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { PunkyapiModule } from '../punkyapi/punkyapi.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { BeerComponent } from './beer.component';


@NgModule({
  declarations: [
    BeerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    RouterModule,
    PunkyapiModule
  ],
  exports: [
    BeerComponent
  ]
})
export class BeerModule { }
