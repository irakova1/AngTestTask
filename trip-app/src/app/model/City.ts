export class City {
  get cityName(): string {
    return this._cName;
  }

  get cityCountry(): string {
    return this._cCountry;
  }

  get cityPhoto(): string {
    return this._cPhoto;
  }
    constructor(
                public _cName: string ,
                public _cCountry: string,
                public _cPhoto: string){}

}
