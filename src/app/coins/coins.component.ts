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
		this.coinService.getCoins().subscribe(coins => 
			{
				console.log("coinService");
				console.log(coins);
				this.coins = coins;
								this.coinService.getCryptoCompareCoins(this.coins).subscribe(data => 
			   {
				   this.coinService.mergeData(this.coins, data);
				   console.log("reçu complete coins");
			   });
			});

		
}
  constructor(private coinService: CoinService) { }
  

  ngOnInit() {
	this.getCoins();
  }
  
    filter() {
	return this.filterValue + " " + this.filterValue;
   }

}
