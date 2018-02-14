import { Injectable } from '@angular/core';
import { Coin } from './coin';

@Injectable()
export class SortCoinsService {

   constructor() { 
     this.sortAsc = true;
	}
  
  sortAsc : boolean;
  
  sort(coins : Coin[], column : String)
  {
		coins.sort((coin1,coin2) : number=> 
		{
			switch(column) { 
			   case 'id': { return this.compare(coin1.id,coin2.id); } 
			   case 'total_value': { return this.compare(coin1.quantity*coin1.price,coin2.quantity*coin2.price); } 
			   case 'market_cap': { return this.compare(coin1.marketCap,coin2.marketCap); } 
			   case 'target_market_cap': { return this.compare(coin1.targetMarketCap,coin2.targetMarketCap); } 
			   case 'target_total_value': { return this.compare(coin1.price * coin1.quantity * coin1.targetMarketCap *1000000 / coin1.marketCap ,coin2.price * coin2.quantity * coin2.targetMarketCap *1000000 / coin2.marketCap); } 
		   }
			
			
		});
		this.sortAsc = !this.sortAsc;
   }
   
   compare(value1, value2)
   {
			if (value1 > value2 ) return  this.sortAsc ? 1 : -1;
			if (value1 < value2 && !this.sortAsc) return this.sortAsc ? -1 : 1;
			return 0;
	}

}
