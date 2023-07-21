export class Weather {
  get tripDay(): string {
    return this._tDay;
  }

  set tripDay(value: string) {
    this._tDay = value;
  }

  get tripWeatherIcon(): string {
    return this._tWeatherIcon;
  }

  set tripWeatherIcon(value: string) {
    this._tWeatherIcon = value;
  }

  get tripTempMax(): number {
    return this._tTempMax;
  }

  set tripTempMax(value: number) {
    this._tTempMax = value;
  }

  get tripTempMin(): number {
    return this._tTempMin;
  }

  set tripTempMin(value: number) {
    this._tTempMin = value;
  }
    constructor(
                private _tDay: string ,
                private _tWeatherIcon: string,
                private _tTempMax: number,
                private _tTempMin: number){}
}

