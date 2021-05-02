import { Component, OnInit } from '@angular/core';
import { PunkyapiService } from '../punkyapi/punkyapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private punky:PunkyapiService) { }

  ngOnInit(): void {

  }

  search(): void {
    this.punky.query("Buzz").subscribe((data) => {
      console.log("search", data);
    });
  }

}
