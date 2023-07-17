import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    AddTripComponent,
    CurrentWeatherComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
