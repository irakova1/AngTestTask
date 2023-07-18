import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Trip } from './model/Trip';
import { TripListService } from './services/trip-list.service';
import { DetailsComponent } from './components/details/details.component';
import { DayListService } from './services/day-list.service';
import { Weather } from './model/Weather';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { City } from './model/City';
import { UnsplashService } from './services/unsplash.service';

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
  title = 'trip-app';

  constructor(private tripListService : TripListService,
    private dayListService: DayListService, private http:HttpClient, private datePipe: DatePipe, private unsplashService: UnsplashService) { }

  ngOnInit(){
    this.tripList = this.tripListService.getTripList();
    this.tripListService.selectedTrip.subscribe((value: Trip) => {
      this.selectedTrip = value;
    });
  }

  isObjectEmpty(obj:any){
    return (Object.keys(obj).length === 0)
  }
  
  onSelectedTrip(trip: Trip) {
    this.tripListService.setTrip(trip);
    this.dayList = this.getTripWeather(trip);
  }
  
  api_key = 'UPBW8P73SR5UNYWECRGNUE8J7';

  getTripWeather(trip: Trip): any{
    console.log('trip selected');
    let weather_url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`+trip.tripCity+`, `+trip.tripCountry+'/'+this.getFormattedDate(trip.tripStartDate)+'/'+this.getFormattedDate(trip.tripEndDate)+`?iconSet=icons1&unitGroup=metric&include=days&key=`+ this.api_key+`&contentType=json`
    let result: Weather[] =[];
    this.http.get(weather_url).subscribe((res:any)=>{
      console.log(res);
      res.days.forEach((day:any)=>{ result.push(new Weather(day.datetime, day.icon, day.tempmax, day.tempmin))})
    });
    return result;
  }

  getFormattedDate(date: Date): any {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }



}
