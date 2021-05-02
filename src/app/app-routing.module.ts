import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBeerComponent } from './create-beer/create-beer.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'create-beer', component: CreateBeerComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
