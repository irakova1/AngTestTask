import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Trip} from "../../model/Trip";
import {TripService} from "../../services/trip.service";
import {City} from "../../model/City";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent{
  constructor(private datePipe: DatePipe){
  }

  @Input() cityList!: {name:string, country: string}[];
  @Input() tripListLength!: number;
  @Output() objectCreated = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  today = new Date();
  errors:string[]=[];
  last = new Date(this.today.getTime() + 15 * 24 * 60 * 60 * 1000);
  selectedCity!: {  name: string; country: string };
  selectedStartDate!: Date;
  selectedEndDate!: Date;

  validateDate() {
    const currentDate = new Date();
    const lastDate = new Date(currentDate.getTime()+15 * 24 * 60 * 60 * 1000);

    if (!this.selectedStartDate) {
      this.errors.push('Start date field is required');
    }
    else if (new Date(this.selectedStartDate) < currentDate || new Date(this.selectedStartDate)> lastDate) {
      this.errors.push('Start date can be selected within 15 days from today');
    }

    if (!this.selectedEndDate){
      this.errors.push('End date field is required');
    }
    else if ( new Date(this.selectedEndDate) < currentDate || new Date(this.selectedEndDate) > lastDate){
      this.errors.push('End date can be selected within 15 days from today');
    }

    if((this.selectedEndDate&&this.selectedStartDate)&&(new Date(this.selectedStartDate)>new Date(this.selectedEndDate))){
      this.errors.push('End date should follow start date.');
    }
  }
  onSubmit(form: any) {
    this.errors=[];
    this.validateDate();
    this.validateSelection();
    console.log(this.errors);

    if (this.errors.length > 0) {
      const alertDialog = document.querySelector('.alert-dialog');
      // @ts-ignore
      alertDialog.style.display = "block";
      return;
    }

    if (form.valid) {
      const newTrip: Trip = new Trip(this.tripListLength+1, this.selectedCity.name, this.selectedCity.country, this.selectedStartDate, this.selectedEndDate )
      this.objectCreated.emit(newTrip);
      form.resetForm();
      this.cancel.emit();
    }
  }
  onCancel(form: any) {
    this.errors=[];
    form.resetForm();
    this.cancel.emit();
  }

  validateSelection(){
    console.log(this.selectedCity);
    if (!this.selectedCity) {
      this.errors.push('City field is required');
    }
  }

}
