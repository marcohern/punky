import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { BeersComponent } from './beers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BeersComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    RouterModule
  ],
  exports: [
    BeersComponent
  ]
})
export class BeersModule { }
