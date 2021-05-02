import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BeersComponent } from './beers/beers.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'beers', component: BeersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
