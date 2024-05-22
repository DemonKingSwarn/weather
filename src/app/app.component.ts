import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  latitude: number = -32.124453;
  longitude: number = 13.961953;
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getWeatherData();
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  getWeatherData(): void {
    this.weatherService.getWeather(this.latitude, this.longitude).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}
