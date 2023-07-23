import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { Trip } from '../../model/Trip';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent{
  searchTrip = '';
  @Output() ngSearch = new EventEmitter<string>();
  
  constructor(
  ) {}

  onSearchSubmit(): void {
    this.ngSearch.emit(this.searchTrip);
  }
}
