import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Trip } from './model/Trip';
import { TripService } from './services/trip.service';
import { DetailsComponent } from './components/details/details.component';
import { WeatherService } from './services/weather.service';
import { Weather } from './model/Weather';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { City } from './model/City';
import { UnsplashService } from './services/unsplash.service';
import {CityService} from "./services/city.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // @ViewChild(TripListComponent) tripList?: ElementRef;
  tripList!: Trip[];
  selectedTrip!: Trip;
  dayList!: Weather[];
  currentDayCityWeather!: Weather;
  title = 'trip-app';
  cityList = [
    { name: 'New York', country: 'US' },
    { name: 'London', country: 'UK' },
    { name: 'Paris', country: 'FR' },
    { name: 'Krakiw', country: 'PL' },
    { name: 'Kyiv', country: 'UA' }
    // Add more cities as needed
  ];
  constructor(private tripService : TripService,
              private cityService : CityService,
              private weatherService: WeatherService, private http:HttpClient, private datePipe: DatePipe, private unsplashService: UnsplashService) { }

  ngOnInit(){
    // this.cityList = this.cityService.getCityList();
    console.log('cityList',this.cityList);
    let start = new Date();
    let end = new Date(start.getTime() + 15 * 24 * 60 * 60 * 1000);
    this.tripList = [new Trip( 1, this.cityList[0].name, this.cityList[0].country, start, end)];
    console.log('tripList',this.tripList);
    this.onSelectedTrip(this.tripList[0]);
    this.tripService.selectedTrip.subscribe((value: Trip) => {
      this.selectedTrip = value;
    });
  }

  isObjectEmpty(obj:any){
    return (Object.keys(obj).length === 0)
  }

  onSelectedTrip(trip: Trip) {
    this.tripService.setTrip(trip);
    this.dayList = this.weatherService.getTripWeather(trip);
    this.currentDayCityWeather = this.weatherService.getTodayTripCityWeather(trip.tripCity, trip.tripCountry);
  }

  showPopup: boolean = false;

  onObjectCreated(newTrip: Trip) {

    // Process the created object (e.g., add to a list)
    console.log('Object created:', newTrip);
    this.tripService.updateTripList(this.tripList,newTrip);
    console.log('after adding', this.tripList)

    // Close the popup form
    this.showPopup = false;
  }

  onPopupCancel() {
    // Close the popup form without creating an object
    this.showPopup = false;
  }
  fillEmptyCells(currentCount: number, totalCount: number): any[] {
    return new Array(totalCount - currentCount).fill(undefined);
  }
}
