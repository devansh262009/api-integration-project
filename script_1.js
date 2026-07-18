async function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        const data = await response.json();

        const temperature = data.current_condition[0].temp_C;
        const description = data.current_condition[0].weatherDesc[0].value;
        const humidity = data.current_condition[0].humidity;

        document.getElementById("result").innerHTML = `
            <h2>${city}</h2>
            <p>🌡 Temperature: ${temperature}°C</p>
            <p>☁ Weather: ${description}</p>
            <p>💧 Humidity: ${humidity}%</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML =
            "<p>Unable to fetch weather data.</p>";
    }
}