import { addInputListeners } from "./weather-form";
import { getTodayWeather } from "./weather";
import {
	displayWeatherToday,
	toggleUnitStyle,
	toggleWeatherLoader,
} from "./dom";

export function initializeLocationInput() {
	addInputListeners(
		getTodayWeather,
		displayWeatherToday,
		toggleUnitStyle,
		toggleWeatherLoader,
	);
}
