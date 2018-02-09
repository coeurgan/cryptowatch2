import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Coin } from './coin';
import { COINS } from './mock-coins';
import { CoinService } from './coin.service';

@Component({
  selector: 'app-coins',
  providers: [ CoinService ],
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

@Injectable()
export class CoinsComponent implements OnInit {

  coins:Coin[];
  
  constructor(private coinService: CoinService) { }

  ngOnInit() {
	this.coins = this.coinService.getCoins();
  }
}
