import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup,FormArray,FormControl } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ICurrency } from 'src/app/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  sourceURL = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) { }

  /**
   * name
   */
  getCurrency() : Observable<any>{    
    return this.http.get(`${this.sourceURL}currencyCode`);
  }

  getExchangeRate( source : string, destination :string, num :  Number) :  Observable<any>{
    
    return this.http.get(`${this.sourceURL}exchangeRate/${source}/${destination}/${num}`);
  }
}
