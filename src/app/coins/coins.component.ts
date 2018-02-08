import { Component, OnInit } from '@angular/core';
import { Coin } from './coin';
import { COINS } from './mock-coins';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins=COINS;
  
  
    constructor() { }

  ngOnInit() {
  }

}
