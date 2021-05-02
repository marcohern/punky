import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BeerComponent } from './beer/beer.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'beer/:id', component: BeerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
