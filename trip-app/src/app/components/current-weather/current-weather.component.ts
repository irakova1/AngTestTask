import {Component, Input, OnInit} from '@angular/core';
import { Trip } from 'src/app/model/Trip';
import { Weather } from 'src/app/model/Weather';
import {WeatherService} from "../../services/weather.service";
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit{
  selectedTrip!: Trip;
  @Input() todayCityWeather!: Weather;

  constructor(private tripService: TripService) {
  }

  ngOnInit(): void {
    this.tripService.selectedTrip$.subscribe((value: Trip) => {
      this.selectedTrip = value;
    });
  }
}
