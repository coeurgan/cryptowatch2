import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coin } from './coin';
import { ApiCoin } from './api-coin';
import { CoinInfo } from './coin-info';
import { COINS } from './mock-coins';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../message.service';

@Injectable()
export class CoinService {

	listCoins : ApiCoin[];
	
	constructor(private http: HttpClient, private messageService:MessageService) {
		//this.getList();
	}
	getCoins(): Observable<Coin[]> {
		return this.http.get<Coin[]>('api/coins');
	}
	
	getList()
	{
		var url = "https://min-api.cryptocompare.com/data/all/coinlist";
		this.http.get<ApiCoin>(url).subscribe(data => 
		{
			
			console.log("typeof_data"+typeof(data["Data"]["42"]));
			console.log(data["Data"]["42"]);
			
			(data.Data as any[]).forEach(element => {
				console.log("boucle");
				console.log(element);
			});
		});
	}

	getCryptoCompareCoins(coins: Coin[]) {
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

	refreshData(coins: Coin[])
	{
		this.getCryptoCompareCoins(coins).subscribe(data => 
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
		});
	}
	   
	add(coins: Coin[], coinId : string, coinQuantity : number, coinTargetMarketCap:number)
	{
	  coins.push({ id: coinId, quantity: coinQuantity, targetMarketCap:coinTargetMarketCap });
	  this.refreshData(coins);
	  this.messageService.add(coinId + " coin added !");
	}

}
