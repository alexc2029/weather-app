import { addInputListeners } from "./weather-form";
import { getTodayWeather } from "./weather";
import { displayWeatherToday, toggleUnitStyle } from "./dom";

export function initializeLocationInput() {
	addInputListeners(getTodayWeather, displayWeatherToday, toggleUnitStyle);
}
