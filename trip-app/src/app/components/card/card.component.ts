import { DatePipe } from '@angular/common';
import {Component, Inject, Input, LOCALE_ID, OnInit} from '@angular/core';
import { City } from 'src/app/model/City';
import { Trip } from 'src/app/model/Trip';
import { UnsplashService } from 'src/app/services/unsplash.service';
import {CityService} from "../../services/city.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [DatePipe]
})

export class CardComponent implements OnInit{
  @Input() trip!: Trip;

  photo!:string;
  constructor(private datePipe: DatePipe, private cityService: CityService, private unsplashService: UnsplashService){
  }

  ngOnInit(): void {
    this.getCityPhoto();
  }

  getCityPhoto(){
    this.unsplashService.getCitiesPhotos(this.trip.tripCity).subscribe(response => {
      this.photo = response.results[0]?.urls.small || ''; // Get the first photo's
    });
  }
  getFormattedDate(date?: Date): any {
    return this.datePipe.transform(date, 'dd.MM.yyyy');
  }

}
