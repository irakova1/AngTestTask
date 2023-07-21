import {City} from "./City";

export class Trip {
  get tripId(): number {
    return this._tId;
  }

  get tripCity(): string {
    return this._tCity;
  }

  get tripCountry(): string {
    return this._tCountry;
  }

  get tripStartDate(): Date {
    return this._tStartDate;
  }

  get tripEndDate(): Date {
    return this._tEndDate;
  }
    constructor(
                private _tId: number ,
                private _tCity: string,
                private _tCountry: string,
                private _tStartDate: Date,
                private _tEndDate: Date){}


}
