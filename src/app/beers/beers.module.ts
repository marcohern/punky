import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BeersComponent } from './beers.component';

@NgModule({
  declarations: [
    BeersComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule
  ],
  exports: [
    BeersComponent
  ]
})
export class BeersModule { }
