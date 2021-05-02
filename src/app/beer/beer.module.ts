import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerComponent } from './beer.component';



@NgModule({
  declarations: [
    BeerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BeerComponent
  ]
})
export class BeerModule { }
