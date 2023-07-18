export class Weather {
    constructor(
                public tDay: string ,
                public tWeatherIcon: string,
                public tTempMax: number,
                public tTempMin: number){}

    get tripDay(): string{
        return this.tDay;
    }

    get tripWeatherIcon(): string{
        return this.tWeatherIcon;
    }

    get tripMaxTemperature(): number{
        return this.tTempMax;
    }

    get tripMinTemperature(): number{
        return this.tTempMin;
    }
    
}
  