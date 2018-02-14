import { Injectable } from '@angular/core';
import { Coin } from './coin';

@Injectable()
export class SortCoinsService {

   constructor() { 
     this.sortAsc = true;
	}
  
  sortAsc : boolean;
  
  sort(coins : Coin[], column: String)
  {
		coins.sort((coin1,coin2) : number=> 
		{
			if (coin1.id > coin2.id ) return  this.sortAsc ? 1 : -1;
			if (coin1.id < coin2.id && !this.sortAsc) return this.sortAsc ? -1 : 1;
			return 0;
		});
		this.sortAsc = !this.sortAsc;
   }

}
