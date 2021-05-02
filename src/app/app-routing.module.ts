import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BeerComponent } from './beer/beer.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'beer/:id', component: BeerComponent },
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
