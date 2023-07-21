import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/Trip';
import { TripService } from 'src/app/services/trip.service';

import { DatePipe } from '@angular/common';

import { HttpClient  } from '@angular/common/http';
import { Weather } from 'src/app/model/Weather';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [DatePipe] // Add DatePipe to the providers list
})
export class DetailsComponent{
  @Input() day!: Weather;

  constructor() {
  }

}
