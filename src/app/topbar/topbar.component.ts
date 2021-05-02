import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'punky-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  @Output('clickMenu') clickMenuEvent: EventEmitter<Event> = new EventEmitter<Event>();

  clickMenu(e:Event) {
    this.clickMenuEvent.emit(e);
  }

}
