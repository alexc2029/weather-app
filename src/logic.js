import { addInputListeners } from "./weather-form";
import { getTodayWeather } from "./weather";
import { displayWeatherToday } from "./dom";

export function initializeLocationInput() {
	addInputListeners(getTodayWeather, displayWeatherToday);
}
