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
	let coins;
	  
    this.http.get<Coin[]>('api/coins').subscribe(coinsRes => {
		   coins = coinsRes
			var codes = "";
			for (let i = 0; i < coins.length; i++) {
				var coin = coins[i];
				codes = codes + coin.id + ",";
			}
			var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+codes+"&tsyms=USD";
			this.http.get(url).subscribe(data => {
				console.log(data);
				for (let i = 0; i < coins.length; i++) {
					var coin = coins[i];
					console.log("coin.id="+coin.id);
					console.log(data["RAW"]);
					coin.price = data["RAW"][coin.id]["USD"]["PRICE"];
					coin.marketCap = data["RAW"][coin.id]["USD"]["MKTCAP"];
					coin.name = "";
				}
			});
		
		});

	

    return of(coins);
  }

}
