export class Trip {
    constructor(
                public tId: number ,
                public tCity: string,
                public tCountry: string,
                public tStartDate: Date,
                public tEndDate: Date){}

    get tripId(): number{
        return this.tId;
    }

    get tripCity(): string{
      return this.tCity;
    }

    get tripCountry(): string{
        return this.tCountry;
    }

    get tripStartDate(): Date{
        return this.tStartDate;
    }
    
    get tripEndDate(): Date{
        return this.tEndDate;
    }
}
  