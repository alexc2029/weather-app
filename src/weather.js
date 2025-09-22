async function fetchTodayWeather(location) {
	let weatherResponse = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=ZF33738HFXAPBMS8T924SFPYT&contentType=json`,
	);
	return weatherResponse;
}

async function getWeatherJson(location) {
	let weatherResponse = await fetchTodayWeather(location);
	let weatherJson = await weatherResponse.json();
	return weatherJson;
}

export async function getTodayWeather(location) {
	let weatherJson = await getWeatherJson(location);
	let trimmedWeatherData = {};
	trimmedWeatherData.icon = weatherJson.days[0].icon;
	trimmedWeatherData.conditions = weatherJson.days[0].conditions;
	trimmedWeatherData.description = weatherJson.days[0].description;
	trimmedWeatherData.temperatureCurrent = weatherJson.currentConditions.temp;
	trimmedWeatherData.temperatureMin = weatherJson.days[0].tempmin;
	trimmedWeatherData.temperatureMax = weatherJson.days[0].tempmax;
	trimmedWeatherData.precipitationProbability =
		weatherJson.days[0].precipprob;
	console.log(trimmedWeatherData);
	return trimmedWeatherData;
}
