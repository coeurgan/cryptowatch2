import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from './coin';
import { COINS } from './mock-coins';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

@Injectable()
export class CoinsComponent implements OnInit {

  coins=COINS;
	



  
  constructor(private http: HttpClient) { }

  ngOnInit() {
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
			coin.price = data.RAW[coin.id].USD.PRICE;
		}
	});
	
  }

}
