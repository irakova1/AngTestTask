import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { City } from 'src/app/model/City';
import { Trip } from 'src/app/model/Trip';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [DatePipe]
})

export class CardComponent{
  @Input() trip!: Trip;
  cities: City[] = [];

  constructor(private datePipe: DatePipe, private unsplashService: UnsplashService){
    this.cities = this.getCityPhotos();
  }

  getFormattedDate(date?: Date): any {
    return this.datePipe.transform(date, 'dd.MM.yyyy');
  }
  citiesList = [
    { name: 'New York', country: 'US' },
    { name: 'London', country: 'UK' },
    { name: 'Paris', country: 'FR' },
    { name: 'Krakiw', country: 'PL' },
    { name: 'Kyiv', country: 'UA' }
    // Add more cities as needed
  ];

  getCityPhotos(): City[] {
    let cities: City[] = [];
    this.citiesList.forEach(city => {
      this.unsplashService.getCitiesPhotos(city.name).subscribe(response => {
        const photo = response.results[0]?.urls.small || ''; // Get the first photo's URL or use an empty string
        cities.push(new City(city.name, city.country, photo));
      });
    });
    return cities;
  }

  getPhotoByTrip(): any{
    let city: City|undefined = this.cities.find((city:City) => {city.cityName === this.trip.tripCity});
    console.log(city);
    return city?.cityPhoto;
  }
 
}
