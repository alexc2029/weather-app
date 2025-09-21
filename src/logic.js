import { addLocationListener } from "./weather-form";
import { getTodayWeather } from "./weather";

export function initializeLocationInput() {
	addLocationListener(getTodayWeather);
}
