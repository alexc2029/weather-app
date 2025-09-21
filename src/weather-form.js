export function addLocationListener(onLocationChange) {
	const weatherInput = document.getElementById("weather-location");
	const submitLocationButton = document.getElementById("get-weather");

	submitLocationButton.addEventListener("click", () => {
		onLocationChange(weatherInput.value);
	});
}
