import { Component, OnInit, Input  } from '@angular/core';
import { CoinService } from '../coins/coin.service';
import { Coin } from '../coins/coin';

@Component({
	providers: [ CoinService],
  selector: 'app-coin-add',
  templateUrl: './coin-add.component.html',
  styleUrls: ['./coin-add.component.css']
})
export class CoinAddComponent implements OnInit {

	@Input() coins: Coin[];
	visible: Boolean;
	constructor(private coinService: CoinService) { }

	ngOnInit() {
		this.visible = false;
	}
  
	add(coinId : string, coinQuantity : number, coinTargetMarketCap:number)
	{
	  this.coinService.add(this.coins, coinId, coinQuantity, coinTargetMarketCap);
	}
	
	setVisible(visible : boolean)
	{
		this.visible = visible;
	}
}
