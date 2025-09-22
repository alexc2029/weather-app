export function addInputListeners(dataOnChange, displayOnChange, onUnitChange) {
	const weatherInput = document.getElementById("weather-location");
	const submitLocationButton = document.getElementById("get-weather");
	const unitToggle = document.querySelector(".unit-toggle");
	let unitGroup = "metric";

	submitLocationButton.addEventListener("click", async () => {
		const data = await dataOnChange(weatherInput.value, unitGroup);
		displayOnChange(data);
	});

	unitToggle.addEventListener("change", async () => {
		onUnitChange();
		if (unitGroup == "metric") unitGroup = "us";
		else unitGroup = "metric";
		if (weatherInput.value) submitLocationButton.click();
	});
}
