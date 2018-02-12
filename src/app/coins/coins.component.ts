import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Coin } from './coin';
import { COINS } from './mock-coins';
import { CoinService } from './coin.service';



@Component({
  selector: 'app-coins',
  providers: [ CoinService ],
  templateUrl: './coins.component.html',
   styleUrls: [
        './coins.component.css'
    ], 
})

@Injectable()
export class CoinsComponent implements OnInit {

  coins:Coin[];
  filterValue:string;
  
	
	getCoins(): void {
		this.coinService.getCoins()
			.subscribe(coins => this.coins = coins);
}
  constructor(private coinService: CoinService) { }
  

  ngOnInit() {
	this.getCoins();
  }
  
    filter() {
	    console.log(this.filterValue);
	return this.filterValue + " " + this.filterValue;
   }

}
