async function fetchTodayWeather(location, unitGroup) {
	let weatherResponse = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=${unitGroup}&key=ZF33738HFXAPBMS8T924SFPYT&contentType=json`,
	);
	return weatherResponse;
}

async function getWeatherJson(location, unitGroup) {
	let weatherResponse = await fetchTodayWeather(location, unitGroup);
	let weatherJson = await weatherResponse.json();
	return weatherJson;
}

export async function getTodayWeather(location, unitGroup) {
	let weatherJson = await getWeatherJson(location, unitGroup);
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
