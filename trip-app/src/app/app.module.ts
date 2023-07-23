import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { DetailsComponent } from './components/details/details.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { TripService } from './services/trip.service';
import { CurrentLocationService } from './services/location.service';
import { DatePipe } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import {FormsModule} from "@angular/forms";
import { TimerComponent } from './components/timer/timer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterPipePipe } from './shared/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTripComponent,
    CurrentWeatherComponent,
    DetailsComponent,
    CardComponent,
    ModalComponent,
    TimerComponent,
    SearchBarComponent,
    FilterPipePipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [TripService, CurrentLocationService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
