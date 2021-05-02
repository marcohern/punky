import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

import { MatButtonModule    } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule      } from '@angular/material/icon';
import { MatSelectModule    } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PunkyapiModule } from '../punkyapi/punkyapi.module';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    PunkyapiModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SearchModule { }
