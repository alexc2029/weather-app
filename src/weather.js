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
	let weatherJson = (await getWeatherJson(location)).days[0];
	let trimmedWeatherData = {};
	trimmedWeatherData.conditions = weatherJson.conditions;
	trimmedWeatherData.description = weatherJson.description;
	trimmedWeatherData.temperatureMin = weatherJson.tempmin;
	trimmedWeatherData.temperatureMax = weatherJson.tempmax;
	trimmedWeatherData.precipitationProbability = weatherJson.precipprob;
	console.log(trimmedWeatherData);
}
