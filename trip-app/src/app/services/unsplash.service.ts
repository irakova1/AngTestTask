import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private api_key = 'SWh5rW1x1_Qs1VVLd0IdQkrZGgb6mFi9APALB305aUk'; // Replace with your Unsplash API key

  constructor(private http: HttpClient) {}

  getCitiesPhotos(city: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.api_key}`
    });

    const url = `https://api.unsplash.com/search/photos?query=${city}&per_page=1`;

    return this.http.get(url, { headers });
  }
}
