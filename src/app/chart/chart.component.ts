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

  chartData:any[] = [];

  view:any[2] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Attribute';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Value';
  legendTitle: string = 'Years';
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#cc4125', '#e06666', '#f6b26b', '#ffd966', '#93c47d', '#76a5af', '#6d9eeb', '#6fa8dc','#8e7cc3','#c27ba0']
  };
  schemeType: string = 'linear';

  constructor(private punky:PunkyapiService) {
    this.generateData();
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

  generateData() {
    this.chartData = [
      {name: 'ABV', value:0, series: []},
      {name: 'IBU',  value:0,series: []},
      //{name: 'TFG', value:0, series: []},
      //{name: 'TOG',  value:0,series: []},
      {name: 'EBC', value:0, series: []},
      {name: 'SRM', value:0, series: []},
      {name: 'PH' , value:0, series: []},
    ];

    for (let item of this.selected) {
      console.log(item);
      this.chartData[0].series.push({name: item.name, value: item.abv||0});
      this.chartData[1].series.push({name: item.name, value: item.ibu||0});
      //this.chartData[2].series.push({name: item.name, value: item.target_fg});
      //this.chartData[3].series.push({name: item.name, value: item.target_og});
      this.chartData[2].series.push({name: item.name, value: item.ebc||0});
      this.chartData[3].series.push({name: item.name, value: item.srm||0});
      this.chartData[4].series.push({name: item.name, value: item.ph||0});
    }
  }
  chartItemSelected(event:Event) {
    //console.log(event);
  }

  chartActivate(data:any): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  chartDeactivate(data:any): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  itemSelected(event:MatAutocompleteSelectedEvent): void {
    //console.log("val",event.option.value);
    this.selected.push(event.option.value);
    this.name.setValue('');
    this.options = [];
    this.generateData();
  }

  private _filter(value:string): Observable<any[]> {
    //console.log("_filter",value);
    if (value.length <= 2) return EMPTY;
    return this.punky.query({beer_name: value});
  }

}
