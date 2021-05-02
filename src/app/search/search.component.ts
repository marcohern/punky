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
  name: string = '';

  constructor(private punky:PunkyapiService) { 
    this.beers = [];
  }

  ngOnInit(): void {

  }

  search(): void {
    this.beers = [];
    this.punky.query({beer_name: this.name}).subscribe((data) => {
      console.log("search", data);
      this.beers = data;
    });
  }

}
