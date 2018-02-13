import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coin } from './coin';
import { COINS } from './mock-coins';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Injectable()
export class CoinService {

  constructor(private http: HttpClient) { }
  getCoins(): Observable<Coin[]> {
     return this.http.get<Coin[]>('api/coins');
}
	  
	getCryptoCompareCoins(coins: Coin[]) {
		console.log("getCryptoCompareCoins+"+coins);
		  if (!coins)
		  {
			  return of(coins);
		  }
		  var codes = "";
		  
			for (let i = 0; i < coins.length; i++) {
				console.log("B:"+i);
				var coin = coins[i];
				codes = codes + coin.id + ",";
				console.log(codes);
			}
			var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+codes+"&tsyms=USD";
			return this.http.get(url);
	  }
	  
	  mergeData(coins: Coin[], data: Object)
	  {
		  console.log("mergeData-"+coins+"-"+data);
		  if (!coins)
		  {
			return;
		  }
		console.log(data);
		for (let i = 0; i < coins.length; i++) {
			var coin = coins[i];
			console.log("coin.id="+coin.id);
			console.log(data["RAW"]);
			coin.price = data["RAW"][coin.id]["USD"]["PRICE"];
			coin.marketCap = data["RAW"][coin.id]["USD"]["MKTCAP"];
			console.log(coin);
			coin.name = "";
		}
		console.log("sortie 2");
	  }
}
