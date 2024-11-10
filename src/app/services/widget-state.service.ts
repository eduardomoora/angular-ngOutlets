import { Injectable } from '@angular/core';

export type Condition = 'sunny' | 'cloudy'

interface WeatherData {
  temperature: number;
  windSpeed: number;
  skyCondition: Condition;
}

@Injectable()
export class WidgetStateService {
  data: WeatherData = {
    temperature: 20,
    windSpeed:5,
    skyCondition: 'sunny'
  }
  lastUpdateAt = new Date();
}
