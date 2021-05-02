import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HelpModule } from '../help/help.module';

import { TopbarComponent } from './topbar.component';



@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    HelpModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
