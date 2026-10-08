document.getElementById('weatherForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const cityName = document.getElementById('city').value.trim();
    const weatherInfo = document.getElementById('weatherInfo');

    if (!cityName) {
        weatherInfo.innerHTML = '<p>Please enter a city.</p>';
        return;
    }

    const apiKey = '6a6e8755adaa713488d7b3cbc2e2GDFFDDG'; //Paste your own apiKey here
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main?.temp ?? 0;
            const description = data.weather?.[0]?.description ?? 'No description';

            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${temp} °C</p>
                <p>Weather: ${description}</p>
            `;
        })
        .catch(error => {
            weatherInfo.innerHTML = `<p>${error.message}</p>`;
            console.error('Error occurred:', error);
        });
});