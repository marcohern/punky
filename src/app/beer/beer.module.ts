import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { BeerComponent } from './beer.component';


@NgModule({
  declarations: [
    BeerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    BeerComponent
  ]
})
export class BeerModule { }
