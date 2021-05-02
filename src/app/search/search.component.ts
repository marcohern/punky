import { Component, OnInit } from '@angular/core';
import { PunkyapiService } from '../punkyapi/punkyapi.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  isLoading():boolean {
    get: { return this.punky.loading; }
  };

  beers: any[];

  constructor(private punky:PunkyapiService) { 
    this.beers = [];
  }

  ngOnInit(): void {

  }

  search(): void {
  
    this.punky.query({beer_name: "Axe"}).subscribe((data) => {
      console.log("search", data);
      this.beers = data;
    });
  }

}
