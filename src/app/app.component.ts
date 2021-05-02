import { Component, OnInit } from '@angular/core';
import { PunkyapiService } from './punkyapi/punkyapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'punky';
  events: string[] = [];
  opened: boolean = false;

  constructor(private punky:PunkyapiService) {

  }
  
  isLoading():boolean {
    get: { return this.punky.loading; }
  };

  ngOnInit(): void {

  }

  toggleSidenav() {
    this.opened = !this.opened;
  }
}
