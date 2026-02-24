export type WeatherResponse = {
  location: Location;
  current: CurrentWeather;
  forecast: forecastType;
};

export type Location = {
  name: string;
};

export type forecastType = {
  forecastDay: ForecastDay;
};

export interface ForecastDay {
  date: string;
  date_epoch: number;

  day: DaySummary;
  astro: Astro;
  hour: Hour[];
}

export interface DaySummary {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;

  condition: Condition;

  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: 0 | 1;
  daily_will_it_snow: 0 | 1;

  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;

  maxwind_kph: number;
  maxwind_mph: number;

  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;

  uv: number;
}

export interface Astro {
  is_moon_up: 0 | 1;
  is_sun_up: 0 | 1;
  moon_illumination: number;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}

export interface Hour {
  time: string;
  time_epoch: number;

  temp_c: number;
  temp_f: number;

  is_day: 0 | 1;

  condition: Condition;

  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;

  pressure_mb: number;
  pressure_in: number;

  precip_mm: number;
  precip_in: number;

  humidity: number;
  cloud: number;

  feelslike_c: number;
  feelslike_f: number;

  windchill_c: number;
  windchill_f: number;

  heatindex_c: number;
  heatindex_f: number;

  dewpoint_c: number;
  dewpoint_f: number;

  vis_km: number;
  vis_miles: number;

  uv: number;

  gust_mph: number;
  gust_kph: number;

  will_it_rain: 0 | 1;
  chance_of_rain: number;

  will_it_snow: 0 | 1;
  chance_of_snow: number;

  snow_cm: number;
}

export type CurrentWeather = {
  cloud: number;
  condition: Condition;
  feelslike_c: number;
  feelslike_f: number;
  humidity: number;
  is_day: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
};

export type Condition = {
  text: string;
  icon: string;
  code: number;
};
