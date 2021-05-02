import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'punky';
  events: string[] = [];
  opened: boolean = false;

  ngOnInit(): void {

  }

  toggleSidenav() {
    this.opened = !this.opened;
  }
}
