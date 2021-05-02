import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PunkyapiService } from '../punkyapi/punkyapi.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit, AfterContentInit {

  id: string|null;
  loaded:boolean;
  beer:any;

  constructor(private route:ActivatedRoute, private punky:PunkyapiService) { 
    console.log("err1");
    this.id = null;
    this.loaded = false;
    this.beer = null;
  }

  ngAfterContentInit(): void {
    
    console.log("err3");
  }

  ngOnInit(): void {
    console.log("err2");
    this.beer = null;
    this.loaded = false;
    this.id = this.route.snapshot.paramMap.get('id');
    this.punky.getBeer(this.id).subscribe((data) => {
      this.beer = data[0];
      console.log(this.beer);
      this.loaded = true;
    });
  }
}
