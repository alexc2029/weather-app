export function addLocationListener(
	dataOnLocationChange,
	displayOnLocationChange,
) {
	const weatherInput = document.getElementById("weather-location");
	const submitLocationButton = document.getElementById("get-weather");

	submitLocationButton.addEventListener("click", async () => {
		const data = await dataOnLocationChange(weatherInput.value);
		displayOnLocationChange(data);
	});
}
