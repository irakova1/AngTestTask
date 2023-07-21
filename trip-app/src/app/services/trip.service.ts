import { Injectable, OnInit } from '@angular/core';

import { Trip } from '../model/Trip';
import {CurrentLocationService} from './location.service';
import { BehaviorSubject } from 'rxjs';
import {CityService} from "./city.service";
import {City} from "../model/City";


@Injectable()
export class TripService{

  private trip = new BehaviorSubject<any>({});
  selectedTrip = this.trip.asObservable();

  constructor(private locationService: CurrentLocationService, private cityService: CityService) {
  }

  setTrip(trip: any) {
    this.trip.next(trip);
  }

  updateTripList(trips: Trip[], trip: Trip) {
    trips.push(trip);
    console.log(trips);
  }
  // setTripList(trips: any) {
  //   this.tripListBus.next(trips);
  // }
}                                                                                                                                                                 // async getTripListOnInit():Promise<Trip[]>{
  //   let position: any;
  //   this.locationService.getCurrentLocation().then(res => console.log(res));
  //   let start = new Date();
  //   let end = new Date(start.getTime() + 15 * 24 * 60 * 60 * 1000);
  //   let trips = [new Trip( 1, 'Lviv', start, end)];
  //   return trips
  // }
