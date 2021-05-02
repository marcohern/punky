import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'punky-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  events: string[] = [];
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
