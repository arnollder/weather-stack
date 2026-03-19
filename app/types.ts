export interface IWeatherWidgetProps {
  apiKey: string;
  lat: string;
  lon: string;
}

export interface IWeatherResponse {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
}
