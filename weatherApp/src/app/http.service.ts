import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {

  }
  getWeather(zipCode){

    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&&appid=62bea26f54311ea6aa6d918bc71b5170`);
    
    
  }
}

