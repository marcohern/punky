import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BeersComponent } from './beers.component';

@NgModule({
  declarations: [
    BeersComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class BeersModule { }
