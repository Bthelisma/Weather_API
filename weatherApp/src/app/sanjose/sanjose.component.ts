import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  humidity;
  avgTemp;
  highTemp;
  lowTemp;
  weatherStatus: any;
  weatherData: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSanJoseWeather();
  }
  getSanJoseWeather() {
    let observable = this._httpService.getWeather("94088");
    observable.subscribe(data => {
        console.log (data)
        this.humidity = data.main.humidity;
        this.avgTemp = this.Alvin(data.main.temp);
        this.highTemp = this.Alvin(data.main.temp_max);
        this.lowTemp = this.Alvin(data.main.temp_min);
        this.weatherStatus = data.weather[0].description;
        this.weatherData = data;
    })
  }
  Alvin(temperature) {
    var newTemp = Math.floor(temperature * (9/5) - 459.67);
    return newTemp;
}


}
