// import React from "react";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./Dashboard.css";
import sunCloudy from "../../assets/sun-cloudy.png";
import PartlySunny from "../../assets/partly-sunny.png";
import Compass from "../../assets/compass.png";
import Drops from "../../assets/drops.png";
import Wind from "../../assets/wind.png";
import { fetchWeatherData } from "../../API/api";

const Dashboard = ({ selectedCity }) => {
  const [selectedCityWeather, setSelectedCityWeather] = useState(null);
  const [otherCitiesWeather, setOtherCitiesWeather] = useState({});
  const otherCities = ["Surat", "Delhi", "Mumbai", "Chennai"];
  const [currentTime, setCurrentTime] = useState("");

  // Fetch weather data for the selected city
  useEffect(() => {
    const fetchSelectedCityWeather = async () => {
      if (!selectedCity) return;
      const data = await fetchWeatherData([selectedCity]);
      setSelectedCityWeather(data[selectedCity]);
    };

    fetchSelectedCityWeather();
  }, [selectedCity]);

  // other cities weather
  useEffect(() => {
    const fetchOtherCitiesWeather = async () => {
      const data = await fetchWeatherData(otherCities);
      setOtherCitiesWeather(data);
    };

    fetchOtherCitiesWeather();
  }, []);

   // Update time every minute
   useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const date = now.toDateString();
      setCurrentTime(`${hours}:${minutes} - ${date}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="dashboard-section">
      {/* Selected City Weather */}
      <div className="home">
        <div className="feed-1">
          <div className="feeds">
            <img src={sunCloudy} alt="Weather Icon" />
            <div>
              <div>
                <span>{selectedCity}</span>
                <span>{selectedCityWeather?.description || "Loading..."}</span>
              </div>
              <div>
                <span>
                  {selectedCityWeather?.temperature || "--"} <sup>o</sup>
                </span>
              </div>
            </div>
          </div>
          <div className="times">
            <div className="time-large">{currentTime.split(" - ")[0]}</div>
            <div className="time-small">{currentTime.split(" - ")[1]}</div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="highlights">
          <h2>Today&apos;s Highlights</h2>
          <div className="all-highlights">
            <div>
              <div>
                <img src={Compass} alt="Temperature Icon" />
                <div>
                  <span>Temperature</span>
                  <span>{selectedCityWeather?.temperature || "--"}°C</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src={Drops} alt="Humidity Icon" />
                <div>
                  <span>Humidity</span>
                  <span>{selectedCityWeather?.humidity || "--"}%</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src={Wind} alt="Wind Icon" height="100px" />
                <div>
                  <span>Wind</span>
                  <span>{selectedCityWeather?.wind || "--"} km/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Cities Weather */}
      <div className="cities">
        <h2>Other Cities</h2>
        <div className="all-cities">
          {otherCities.map((city, index) => (
            <div key={index}>
              <div>
                <img src={PartlySunny} alt="Weather Icon" />
                <div>
                  <span>{city}</span>
                  <span>
                    {otherCitiesWeather[city]?.description || "Loading..."}
                    <br />
                    High: {otherCitiesWeather[city]?.high || "--"}°
                    <br />
                    Low: {otherCitiesWeather[city]?.low || "--"}°
                  </span>
                </div>
              </div>
              <div>
                <span>
                  {otherCitiesWeather[city]?.temperature || "--"} <sup>o</sup>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  selectedCity: PropTypes.string.isRequired,
};

export default Dashboard;
