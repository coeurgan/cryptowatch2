import { Injectable } from '@angular/core';
import { Coin } from './coin';
import { COINS } from './mock-coins';

@Injectable()
export class CoinService {

  constructor() { }
  
  getHeroes(): Coin[] {
	  var coins= COINS;
	  var codes = "";
	for (let i = 0; i < this.coins.length; i++) {
		
		var coin = this.coins[i];
		codes = codes + coin.id + ",";
	}
	//var data;
	  var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+codes+"&tsyms=USD";
	this.http.get(url).subscribe(data => {
		console.log(data);
		for (let i = 0; i < this.coins.length; i++) {
			var coin = this.coins[i];
			console.log(coin.id);
			coin.price = data["RAW"][coin.id]["USD"]["PRICE"];
		}
	});
    return coins;
  }

}
