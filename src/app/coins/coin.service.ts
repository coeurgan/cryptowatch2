import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coin } from './coin';
import { COINS } from './mock-coins';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CoinService {

  constructor(private http: HttpClient) { }

  getCoins(): Observable<Coin[]> {

    return this.http.get<Coin[]>('api/coins');
  }

}
