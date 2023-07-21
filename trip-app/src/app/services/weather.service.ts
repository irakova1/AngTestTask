import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TripService } from './trip.service';
import { Trip } from '../model/Trip';
import {Weather} from '../model/Weather';
import {City} from "../model/City";
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private tripService: TripService, private datePipe: DatePipe, private http:HttpClient) {}
  api_key = 'UPBW8P73SR5UNYWECRGNUE8J7';

  getTripWeather(trip: Trip): Weather[]{
    console.log('getTripWeather', trip);
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${trip.tripCity}, ${trip.tripCountry}/${this.getFormattedDate(trip.tripStartDate)}/${this.getFormattedDate(trip.tripEndDate)}?iconSet=icons1&unitGroup=metric&include=days&key=${this.api_key}&contentType=json`
    let result: Weather[] =[];
    this.http.get(url).subscribe((res:any)=>{
      result.push(res.days.map((day:any)=>{ new Weather(day.datetime, day.icon, day.tempmax, day.tempmin)}))
    });
    return result;
  }

  getTodayTripCityWeather(city: string, country: string): Weather{
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city} , ${country}/today?unitGroup=metric&include=days&key=${this.api_key}&contentType=json`;
    let result = new Weather('','', 0, 0);
    this.http.get(url).subscribe((res:any)=>{
      let todayWeather = res.days[0];
      result.tripDay = todayWeather.datetime;
      result.tripWeatherIcon = todayWeather.icon;
      result.tripTempMax = todayWeather.tempmax;
      result.tripTempMin = todayWeather.tempmin;
    });
    return result;
  }

  getFormattedDate(date: Date): any {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

}
