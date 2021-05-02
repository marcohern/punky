import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { EMPTY, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { PunkyapiService } from '../punkyapi/punkyapi.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  name = new FormControl();
  options: any[] = [];
  selected: any[] = [];
  filteredOptions: Observable<any[]> = EMPTY;

  single = [];
  multi = [];

  view:any[2] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private punky:PunkyapiService) {
    Object.assign(this, this.single);
    this.filteredOptions = this.name.valueChanges
      .pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(val => {
          console.log("switchMap");
          return this._filter(val || '')
        })       
      );

    this.filteredOptions.subscribe(value => {
      this.options = value;
    });
  }

  ngOnInit(): void {
  }
  onSelect(event:Event) {
    console.log(event);
  }

  itemSelected(event:MatAutocompleteSelectedEvent): void {
    console.log("val",event.option.value);
    this.selected.push(event.option.value);
    this.name.setValue('');
    this.options = [];
  }

  private _filter(value:string): Observable<any[]> {
    console.log("_filter",value);
    if (value.length <= 2) return EMPTY;
    return this.punky.query({beer_name: value});
  }

}
