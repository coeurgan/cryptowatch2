import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  coins=COINS;
	



  
  constructor(private http: HttpClient, CoinService: CoinService) { }

  ngOnInit() {
	
	
  }

}
