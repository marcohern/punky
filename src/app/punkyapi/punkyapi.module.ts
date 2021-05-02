import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PunkyapiService } from './punkyapi.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    PunkyapiService
  ]
})
export class PunkyapiModule { }
