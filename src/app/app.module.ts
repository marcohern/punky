import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavModule        } from './sidenav/sidenav.module';
import { TopbarModule         } from './topbar/topbar.module';
import { SearchModule         } from './search/search.module';
import { BeerModule           } from './beer/beer.module';
import { PunkyapiModule       } from './punkyapi/punkyapi.module';
import { ChartModule          } from './chart/chart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    SidenavModule,
    TopbarModule,
    SearchModule,
    BeerModule,
    PunkyapiModule,
    ChartModule,

    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
