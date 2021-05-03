import { Component, OnInit } from '@angular/core';
import { PunkyapiService } from '../punkyapi/punkyapi.service';
import { HttpErrorResponse } from '@angular/common/http';

interface LooseObject {
  [key: string]: any
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  beers: any[];
  name: string = '';
  yeast: string = '';
  malt: string = '';
  hops: string = '';
  food: string = '';
  min_abv: string = '';
  max_abv: string = '';
  min_ibu: string = '';
  max_ibu: string = '';
  min_ebc: string = '';
  max_ebc: string = '';

  constructor(private punky:PunkyapiService) { 
    this.beers = [];
  }

  ngOnInit(): void {

  }
  
  isLoading():boolean {
    get: { return this.punky.loading; }
  };

  buildQuery(): {[param: string]: string} {
    let r:{[param: string]: string} = {};
    if (this.name && this.name.length > 0) r.beer_name = this.name.replace(/\s/,'_');
    if (this.yeast && this.yeast.length > 0) r.yeast = this.yeast.replace(/\s/,'_');
    if (this.hops && this.hops.length > 0) r.hops = this.hops.replace(/\s/,'_');
    if (this.malt && this.hops.length > 0) r.malt = this.malt.replace(/\s/,'_');
    if (this.food && this.food.length > 0) r.food = this.food.replace(/\s/,'_');
    if (this.min_abv && this.min_abv.length > 0) r.abv_gt = this.min_abv.toString();
    if (this.max_abv && this.max_abv.length > 0) r.abv_lt = this.max_abv.toString();
    if (this.min_ibu && this.min_ibu.length > 0) r.ibu_gt = this.min_ibu.toString();
    if (this.max_ibu && this.max_ibu.length > 0) r.ibu_lt = this.max_ibu.toString();
    if (this.min_ebc && this.min_ebc.length > 0) r.ebc_gt = this.min_ebc.toString();
    if (this.max_ebc && this.max_ebc.length > 0) r.ebc_gt = this.max_ebc.toString();
    return r;
  }

  search(): void {
    this.beers = [];
    this.punky.query(this.buildQuery()).subscribe((data) => {
      this.beers = data;
    });
  }

}
