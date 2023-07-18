import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { DetailsComponent } from './components/details/details.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { TripListService } from './services/trip-list.service';
import { CurrentLocationService } from './services/location.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddTripComponent,
    CurrentWeatherComponent,
    DetailsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TripListService, CurrentLocationService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
