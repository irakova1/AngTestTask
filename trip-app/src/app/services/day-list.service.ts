import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TripListService } from './trip-list.service';
import { Trip } from '../model/Trip';
import { Weather } from '../model/Weather';
@Injectable({
  providedIn: 'root',
})
export class DayListService {
  constructor(private tripListService: TripListService, private datePipe: DatePipe, private http:HttpClient) {}

}
