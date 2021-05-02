import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
