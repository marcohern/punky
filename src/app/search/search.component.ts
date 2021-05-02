import { Component, OnInit } from '@angular/core';
import { PunkyapiService } from '../punkyapi/punkyapi.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  beers: any[];
  name: string = '';

  constructor(private punky:PunkyapiService) { 
    this.beers = [];
  }

  ngOnInit(): void {

  }
  
  isLoading():boolean {
    get: { return this.punky.loading; }
  };

  search(): void {
    this.beers = [];
    this.punky.query({beer_name: this.name}).subscribe((data) => {
      this.beers = data;
    });
  }

}
