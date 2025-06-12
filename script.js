const apiKey = '111a10d984d0458f92d191544251106 '; 

async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) return alert("Please enter a city name");

    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`);
    const data = await response.json();

    document.getElementById('city-name').innerText = `${data.location.name}, ${data.location.country}`;
    document.getElementById('temp').innerText = `${data.current.temp_c}°C`;
    document.getElementById('feels-like').innerText = `Feels like ${data.current.feelslike_c}°C`;
    document.getElementById('condition').innerText = data.current.condition.text;
    document.getElementById('date-time').innerText = `${data.location.localtime}`;

document.querySelector('.highlights').classList.remove('hidden');
document.querySelector('.search-box').classList.remove('below');


    document.getElementById('humidity').innerText = `${data.current.humidity}%`;
    document.getElementById('wind').innerText = `${data.current.wind_kph} kph`;
    document.getElementById('cloud').innerText = `${data.current.cloud}%`;
    document.getElementById('uv').innerText = data.current.uv;
    document.getElementById('pressure').innerText = `${data.current.pressure_mb} hPa`;
    document.getElementById('sun').innerHTML = `🌅 ${data.forecast.forecastday[0].astro.sunrise} <br> 🌇 ${data.forecast.forecastday[0].astro.sunset}`;

    let forecastHTML = '';
    data.forecast.forecastday.forEach(day => {
        forecastHTML += `
            <div class="forecast-day">
                <p>${day.date}</p>
                <img src="https:${day.day.condition.icon}" alt="icon">
                <p>${day.day.condition.text}</p>
                <p>${day.day.maxtemp_c}°C / ${day.day.mintemp_c}°C</p>
            </div>
        `;
    });
    document.getElementById('forecast').innerHTML = forecastHTML;
}
