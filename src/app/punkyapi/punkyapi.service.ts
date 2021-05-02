import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PunkyapiService {

  constructor(private client:HttpClient) {
    
  }

  query(name: string): Observable<any> {
    return this.client.get(environment.host + 'v2/beers', { 
      params: { beer_name: name },
      headers: {
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
      }
    } );
  }
}
