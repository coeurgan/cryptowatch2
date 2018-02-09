import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from './coin';
import { COINS } from './mock-coins';

@Injectable()
export class CoinService {

  constructor(private http: HttpClient) { }
  
  getCoins(): Coin[] {
	var coins= COINS;
	var codes = "";
	for (let i = 0; i < coins.length; i++) {
		
		var coin = coins[i];
		codes = codes + coin.id + ",";
	}
	//var data;
	var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+codes+"&tsyms=USD";
	this.http.get(url).subscribe(data => {
		console.log(data);
		for (let i = 0; i < coins.length; i++) {
			var coin = coins[i];
			console.log(coin.id);
			coin.price = data["RAW"][coin.id]["USD"]["PRICE"];
		}
	});
    return coins;
  }

}
