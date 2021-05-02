import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBeerComponent } from './create-beer/create-beer.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  { path: 'create-beer', component: CreateBeerComponent },
  { path: 'search', component: SidenavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
