import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coin } from './coin';
import { ApiCoin,  CoinListResponse, CoinData} from './api-coin';
import { COINS } from './mock-coins';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../message.service';

@Injectable()
export class CoinService {

	
	
	constructor(private http: HttpClient, private messageService:MessageService) {
		
	}
	getCoins(): Observable<Coin[]> {
		return this.http.get<Coin[]>('api/coins');
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
	   
	add(coins: Coin[], coinId : string, coinQuantity : number, coinTargetMarketCap:number):boolean
	{
		if (coinId == "" || !coinQuantity || !coinTargetMarketCap)
		{
			this.messageService.addError("Please fill in the form !");
			return false;
		}
		coins.push({ id: coinId, quantity: coinQuantity, targetMarketCap:coinTargetMarketCap });
		this.refreshData(coins);
		this.messageService.addSuccess(coinId + " coin added !");
		return true;
	}
	
		getList(listCoins : ApiCoin[])
	{
		var url = "https://min-api.cryptocompare.com/data/all/coinlist";
		this.http.get<CoinListResponse>(url).subscribe(data => 
		{
			(Object.values(data.Data)).forEach(element => {
				listCoins.push(element);
			});
			console.log(listCoins);
		});
	}

}
