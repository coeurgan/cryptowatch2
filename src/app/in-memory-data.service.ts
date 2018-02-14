import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const coins = [
	  { id: "ETH", quantity: 1, targetMarketCap:200000 },
	  { id: "XRB", quantity: 10, targetMarketCap:10000},
	  { id: "XBY", quantity: 100, targetMarketCap:5000},
    ];
    return {coins};
  }
}