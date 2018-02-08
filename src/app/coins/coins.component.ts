import { Component, OnInit } from '@angular/core';
import {BaseRequestOptions, Http} from '@angular/http';
import { Coin } from './coin';
import { COINS } from './mock-coins';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins=COINS;
	



  
  constructor(private Http: Http) { }

  ngOnInit() {
	for (let i = 0; i < this.coins.length; i++) {
		var codes = "";
		var coin = this.coins[i];
		codes = codes + coin.code + ",";
	}
	var data;
	  var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+codes+"&tsyms=USD";
	 http.get(url).subscribe((res:Response) => data = res.json());
	for (number i = 0; i < this.coins.length; i++) {
		var coin = coins[i];
		coin.price = data.RAW[coin.code].USD.PRICE;
	}
  }

}
