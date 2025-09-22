export async function displayWeatherToday(weatherData) {
	const iconContainer = document.querySelector(".icon");
	const tempNowContainer = document.querySelector(".temp-now");
	const tempMaxContainer = document.querySelector(".temp-max");
	const tempMinContainer = document.querySelector(".temp-min");
	const precipitationContainer = document.querySelector(".precipitation");
	const descriptionContainer = document.querySelector(".description");

	iconContainer.innerHTML = "";
	tempNowContainer.innerText = "";
	tempMaxContainer.innerText = "";
	tempMinContainer.innerText = "";
	precipitationContainer.innerText = "";
	descriptionContainer.innerText = "";

	const iconFile = await import(`./weather-icons/${weatherData.icon}.png`);
	const icon = document.createElement("img");
	icon.src = iconFile.default;
	iconContainer.appendChild(icon);

	tempNowContainer.innerText = `Now: ${weatherData.temperatureCurrent}°`;
	tempMaxContainer.innerHTML = `${weatherData.temperatureMax}°`;
	tempMinContainer.innerHTML = `${weatherData.temperatureMin}°`;

	precipitationContainer.innerText = `Precipitation: ${weatherData.precipitationProbability}%`;
	descriptionContainer.innerText = `${weatherData.description}`;
}
