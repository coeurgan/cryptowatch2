import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Coin } from './coin';
import { COINS } from './mock-coins';
import { CoinService } from './coin.service';
import { SortCoinsService } from './sort-coins.service';



@Component({
  selector: 'app-coins',
  providers: [ CoinService,  SortCoinsService],
  templateUrl: './coins.component.html',
   styleUrls: [
        './coins.component.css'
    ], 
})

@Injectable()
export class CoinsComponent implements OnInit {

  coins:Coin[];
  filterValue:string;
  selectedCoin: Coin;

	onSelect(coin: Coin): void {
	  this.selectedCoin = coin;
	}
	
	onSort(column: string): void {
		this.sortCoinsService.sort(this.coins, column);
	}
  
	
	getCoins(): void {
		this.coinService.getCoins().subscribe(coins => 
			{
				this.coins = coins;
				this.coinService.getCryptoCompareCoins(this.coins).subscribe(data => 
			   {
				   this.coinService.mergeData(this.coins, data);
			   });
			});

		
}
  constructor(private coinService: CoinService, private sortCoinsService: SortCoinsService) { }
  
  ngOnInit() {
	this.getCoins();
  }
  

}
