export class City {
    constructor(
                public cName: string ,
                public cCountry: string,
                public cPhoto: string){}

    get cityName(): string{
        return this.cName;
    }

    get cityCountry(): string{
        return this.cCountry;
    }

    get cityPhoto(): string{
        return this.cPhoto;
    }
}
