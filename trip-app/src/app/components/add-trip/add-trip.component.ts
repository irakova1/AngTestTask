import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Trip} from "../../model/Trip";
import {TripService} from "../../services/trip.service";

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent {
  formData: any = {}; // Store form data here
  constructor(private tripService : TripService) {
  }

  @Input() tripList!: Trip[];
  @Output() objectCreated = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  // onSubmit() {
  //   // Emit the created object and reset form data
  //   this.objectCreated.emit(this.formData);
  //   this.formData = new Trip(2, this.objectCreated.name.cityName,this.objectCreated.name.cityCountry, this.objectCreated.startDate, this.objectCreated.endDate );
  // }

  onSubmit(form: any) {
    if (form.valid) {
      const newTrip: Trip = new Trip(this.tripList.length+1, form.value.city, form.value.country, form.value.startDate, form.value.endDate )
      this.objectCreated.emit(newTrip);
      form.resetForm();
      this.cancel.emit();
    }
  }
  onCancel(form: any) {
    // Emit the cancel event and reset form data

    form.resetForm();
    this.cancel.emit();
    // this.formData = {};
    // form.resetForm();
  }
}
