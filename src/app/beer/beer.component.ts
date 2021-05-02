import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PunkyapiService } from '../punkyapi/punkyapi.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  id: string|null;
  loaded:boolean;
  beer:any;

  constructor(private route:ActivatedRoute, private punky:PunkyapiService) { 
    this.id = null;
    this.loaded = false;
    this.beer = null;
  }
  
  isLoading():boolean {
    get: { return this.punky.loading; }
  };

  ngOnInit(): void {
    this.beer = null;
    this.loaded = false;
    this.id = this.route.snapshot.paramMap.get('id');
    this.punky.getBeer(this.id).subscribe((data) => {
      this.beer = data[0];
      this.loaded = true;
    });
  }
}
