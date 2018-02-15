import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MillionDollarsPipe } from './million-dollars.pipe';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinAddComponent } from './coin-add/coin-add.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    MillionDollarsPipe,
    CoinDetailComponent,
    CoinAddComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
	
	HttpClientInMemoryWebApiModule.forRoot(
		InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
	),
  ],
  providers: [

  MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
