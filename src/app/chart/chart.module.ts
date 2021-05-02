import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PunkyapiModule } from '../punkyapi/punkyapi.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ChartComponent } from './chart.component';



@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    PunkyapiModule,
    NgxChartsModule
  ]
})
export class ChartModule { }
