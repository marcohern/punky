import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { empty, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators'

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PunkyapiService {

  loading: boolean = false;

  constructor(private client:HttpClient, private snackBar:MatSnackBar) {
    this.loading = false;
  }

  headers(): {[header: string]: string} {
    return {
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*'
    }
  }

  handleError<T>(err:HttpErrorResponse): Observable<T> {
    this.snackBar.open("Error contacting api. Try again later.", "Close");
    return of<T>();
  }

  private get<T>(uri: string, params: {[param: string]: string}): Observable<T> {
    this.loading = true;
    return this.client.get<T>(environment.host + 'v2/beerssssss', { 
      params: params,
      headers: this.headers()
    }).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.handleError<T>(err);
      }),
      finalize(() => {
        this.loading = false;
        return of<T>();
      })
    );
  }

  query(params: {[param: string]: string}): Observable<any> {
    return this.get<any>('v2/beerssssss', params);
  }
}
