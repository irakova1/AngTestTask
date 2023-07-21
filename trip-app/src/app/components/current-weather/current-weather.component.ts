import {Component, Input, OnInit} from '@angular/core';
import { Trip } from 'src/app/model/Trip';
import { Weather } from 'src/app/model/Weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent{
  @Input() dayCityWeather!: Weather;
}
