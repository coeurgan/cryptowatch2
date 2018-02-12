import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MillionDollarsPipe } from './million-dollars.pipe';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';


@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    MillionDollarsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
	
	HttpClientInMemoryWebApiModule.forRoot(
		InMemoryDataService, { dataEncapsulation: false }
	),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
