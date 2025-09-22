import { addLocationListener } from "./weather-form";
import { getTodayWeather } from "./weather";
import { displayWeatherToday } from "./dom";

export function initializeLocationInput() {
	addLocationListener(getTodayWeather, displayWeatherToday);
}
