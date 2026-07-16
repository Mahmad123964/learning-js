const input = document.querySelector("#cityInput");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");

async function getWeather(city) {

    try {

        result.textContent = "Loading...";

        // Step 1: City → Coordinates

        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
        );

        const geoData = await geoResponse.json();

        if (!geoData.results) {
            result.textContent = "City not found";
            return;
        }

        const latitude = geoData.results[0].latitude;
        const longitude = geoData.results[0].longitude;

        // Step 2: Coordinates → Weather

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
        );

        const weatherData = await weatherResponse.json();

        const temperature =
            weatherData.current.temperature_2m;

        result.textContent =
            `${city}: ${temperature}°C`;

    } catch (error) {

        console.log(error);

        result.textContent =
            "Something went wrong";

    }
}

button.addEventListener("click", () => {

    const city = input.value.trim();

    if (city === "") {
        alert("Please enter a city");
        return;
    }

    getWeather(city);

});