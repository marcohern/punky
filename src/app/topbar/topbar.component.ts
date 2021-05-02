import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpComponent } from '../help/help.component';

@Component({
  selector: 'punky-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
  }

  @Output('clickMenu') clickMenuEvent: EventEmitter<Event> = new EventEmitter<Event>();

  clickMenu(e:Event) {
    this.clickMenuEvent.emit(e);
  }

  clickHelp(e:Event) {
    this.dialog.open(HelpComponent, {
      width: '400px'
    });
  }

}
