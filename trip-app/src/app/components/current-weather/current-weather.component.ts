import {Component, Input, OnInit} from '@angular/core';
import { Trip } from 'src/app/model/Trip';
import { Weather } from 'src/app/model/Weather';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit{
  @Input() selectedTrip!: Trip;
  todayCityWeather!: Weather;

  constructor(private weatherService: WeatherService) {
  }
  ngOnInit(): void {
    this.getTodayCityWeather();
  }
  getTodayCityWeather(){
    this.weatherService.getTodayTripCityWeather(this.selectedTrip.tripCity, this.selectedTrip.tripCountry).subscribe((todayWeatherData) => {
      this.todayCityWeather = todayWeatherData;
      console.log(this.todayCityWeather)
    });
  }


}
