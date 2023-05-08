import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercComponent } from './headerc/headerc.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PreviousDetailsComponent } from './previous-details/previous-details.component';
import { ThisMonthSummaryComponent } from './this-month-summary/this-month-summary.component';
import { HowToPayComponent } from './how-to-pay/how-to-pay.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercComponent,
    HeaderComponent,
    UserDetailsComponent,
    PreviousDetailsComponent,
    ThisMonthSummaryComponent,
    HowToPayComponent,
    AdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
