import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBeerComponent } from './create-beer/create-beer.component';


const routes: Routes = [
  { path: 'create-beer', component: CreateBeerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
