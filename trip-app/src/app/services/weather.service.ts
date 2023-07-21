import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TripService } from './trip.service';
import { Trip } from '../model/Trip';
import {Weather} from '../model/Weather';
import {City} from "../model/City";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private tripService: TripService, private datePipe: DatePipe, private http:HttpClient) {}
  api_key = 'UPBW8P73SR5UNYWECRGNUE8J7';


  getTripWeather(trip: Trip): Observable<Weather[]> {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${trip.tripCity}, ${trip.tripCountry}/${this.getFormattedDate(trip.tripStartDate)}/${this.getFormattedDate(trip.tripEndDate)}?iconSet=icons1&unitGroup=metric&include=days&key=${this.api_key}`;
    return this.http.get(url).pipe( map((res: any) => {
        return res.days.map((day: any) => new Weather(day.datetime, day.icon, day.tempmax, day.tempmin));
      })
    );
  }

  getTodayTripCityWeather(city: string, country: string): Observable<Weather>{
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city} , ${country}/today?unitGroup=metric&include=days&key=${this.api_key}&contentType=json`;
    return this.http.get(url).pipe( map((res:any)=>{
      let todayWeather = res.days[0];
      return new Weather(todayWeather.datetime, todayWeather.icon, todayWeather.tempmax, todayWeather.tempmin);
    }));
  }

  getFormattedDate(date: Date): any {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

}
