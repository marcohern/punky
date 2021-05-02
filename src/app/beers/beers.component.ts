import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'punky-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  @Input() beers: any[];

  constructor() {
    this.beers = [];
  }

  ngOnInit(): void {
  }

}
