import axios from "axios";

const API_KEY = "281f98eeace66802f8b0100b2d715a57"; // My API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async(cities) => {
    const data = {};
    await Promise.all(
        cities.map(async(city) => {
            try {
                const requestUrl = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
                const response = await axios.get(requestUrl);
                data[city] = {
                    temperature: response.data.main.temp,
                    high: response.data.main.temp_max,
                    low: response.data.main.temp_min,
                    description: response.data.weather[0].description,
                };
            } catch (error) {
                if (error.response) {
                    console.error(`Error fetching weather data for ${city}:`, error.response.data);
                    if (error.response.status === 404) {
                        console.error(`City not found: ${city}`);
                    } else if (error.response.status === 401) {
                        console.error(`Invalid API key: ${API_KEY}`);
                    }
                } else {
                    console.error(`Error fetching weather data for ${city}:`, error.message);
                }
            }
        })
    );
    return data;
};