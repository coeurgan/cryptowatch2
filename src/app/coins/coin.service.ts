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
				var coin = coins[i];
				codes = codes + coin.id + ",";
			}
			var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+codes+"&tsyms=USD";
			return this.http.get(url);
	  }
	  
	  mergeData(coins: Coin[], data: Object)
	  {
		  if (!coins)
		  {
			return;
		  }
		for (let i = 0; i < coins.length; i++) {
			var coin = coins[i];
			coin.price = data["RAW"][coin.id]["USD"]["PRICE"];
			coin.marketCap = data["RAW"][coin.id]["USD"]["MKTCAP"];
			coin.name = "";
		}
	  }
	  
	  refreshData(coins: Coin[])
	  {
			this.getCryptoCompareCoins(coins).subscribe(data => 
			{
				this.mergeData(coins, data);
			});
	   }
	   
	add(coins: Coin[], coinId : string, coinQuantity : number, coinTargetMarketCap:number)
	{
	  coins.push({ id: coinId, quantity: coinQuantity, targetMarketCap:coinTargetMarketCap });
	  this.refreshData(coins);
	}

}
