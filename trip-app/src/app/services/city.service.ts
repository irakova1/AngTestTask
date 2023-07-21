import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable, pipe} from "rxjs";
import {City} from "../model/City";
import {UnsplashService} from "./unsplash.service";
import {isArray} from "@angular/compiler-cli/src/ngtsc/annotations/common";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private http: HttpClient, private unsplashService: UnsplashService, @Inject(LOCALE_ID) private localeId: string) {
  }

  getCityPhoto(cityName:string){
    let photo!:string;
    this.unsplashService.getCitiesPhotos(cityName).subscribe(response => {
      photo = response.results[0]?.urls.small || ''; // Get the first photo's
    });
    console.log('photo', photo);
    return photo;
  }
}

// citiesList = [
//   { name: 'New York', country: 'US' },
//   { name: 'London', country: 'UK' },
//   { name: 'Paris', country: 'FR' },
//   { name: 'Krakiw', country: 'PL' },
//   { name: 'Kyiv', country: 'UA' }
//   // Add more cities as needed
// ];

// getCityList(): City[] {
//   let cities: City[] = [];
//   this.citiesList.forEach(city => {
//     this.unsplashService.getCitiesPhotos(city.name).subscribe(response => {
//       const photo = response.results[0]?.urls.small || ''; // Get the first photo's URL or use an empty string
//       cities.push(new City(city.name, city.country, photo));
//     });
//   });
//   return cities;
// }

// private geonamesBaseUrl = 'http://api.geonames.org';
// private apiUrl = 'https://restcountries.com/v3.1/all';
//
// getCountryCodes(){
//   return this.http.get<any[]>(this.apiUrl);
// }
// getCities(countryCode: string): Observable<any> {
//   const username = 'beerka_1'; // Replace with your Geonames username
//   const url = `${this.geonamesBaseUrl}/searchJSON?country=${countryCode}&username=${username}`;
//   return this.http.get(url);
//   // http://api.geonames.org/searchJSON?country=US&username=beerka_1
// }
//
// fetchCitiesForAllCountries() : City[]{
//   let cityList: City[] = [];
//   let codes: string[] = [];
//   this.getCountryCodes()
//     .subscribe((data: any[]) => {
//       // console.log('data', typeof data);
//       // console.log('...data',typeof data);
//       codes.push(...data.map((countryDesc:{cca2:string;}) => (countryDesc.cca2)));
//       // console.log('codes',typeof codes);
//     },)
//   console.log(codes);
//   console.log('before loop');
//   codes.forEach((country)=>{
//     let list: any[]=[];
//     console.log('country', country);
//     this.getCities(country)
//       // .pipe(map((res:any[]) => res.map((citeDesc:any) => citeDesc.geonames.name)))
//       .subscribe((data: any[]) => {
//         console.log("data", data);
//         list.push(...data.map((cityDesc:any) => (cityDesc.geonames)))
//       });
//     list.forEach((cityName:string)=>{
//       console.log(cityName);
//       cityList.push(new City(cityName, country, this.getCityPhoto(cityName)))})})
//
//   return cityList;
// }

// getCityList(): Observable<City[]> {
//   return forkJoin(this.citiesList.map(city => {
//     return this.unsplashService.getCitiesPhotos(city.name).pipe(
//       map(response => {
//         const photo = response.results[0]?.urls.small || ''; // Get the first photo's URL or use an empty string
//         return new City(city.name, city.country, photo);
//       })
//     );
//   }))
//   // return forkJoin(citiesObservables);
// }
