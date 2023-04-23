let city = "";

async function getWeather() {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df667cbbede21ae39091eadc287db450&units=imperial`,
		{ mode: "cors" }
	);
	const weatherData = await response.json();
	const temp = document.getElementById("temp");
	const weatherText = document.getElementById("weather-text");
	const weatherImg = document.createElement("img");
	let weather = weatherData.weather[0].main;
	console.log(weatherData);
	temp.textContent = weatherData.main.temp.toString().slice(0, 2) + "°";
	weatherText.textContent = weather;
	body.appendChild(weatherImg);
	if (weather === "Clouds") {
		weatherImg.src = "images/cloudy.png";
	}
}

const cityInput = document.getElementById("city-input");
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", () => {
	city = cityInput.value;
	getWeather();
});
