import { useEffect, useState } from "react";
import axios from "axios";
const Search = ({
  query,
  setQuery,
  setWeatherData,
  cityName,
  setCityName,
  
}) => {
 


  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "e425dabb6c5bd29711cdf67e228696f2";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data;
        setWeatherData(data);
        console.log("Weather Data:", data);
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    };
    fetchWeather();
  }, [cityName, setWeatherData]);

  console.log(cityName);
  const hadleGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);

          // Reverse geocoding to get city name based on coordinates
          const apiKey = "e425dabb6c5bd29711cdf67e228696f2";
          const reverseGeocodingUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

          try {
            const response = await axios.get(reverseGeocodingUrl);
            const cityNameFromGeo = response.data.name;
            console.log("City Name from Geo:", cityNameFromGeo);
            setCityName(cityNameFromGeo);
          } catch (error) {
            console.error(
              "Error fetching city name from coordinates:",
              error.message
            );
          }
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    }
  };

  // handle button search
  const handleSearch = () => {
  
    if (query) {
      setCityName(query);
    }
    setQuery('')
  };
  

  return (
    <div className="flex justify-center w-full h-full border  rounded backdrop-filter backdrop-blur-2xl p-10 bg-opacity-60 bg-indigo-900 ">
      <div className="w-full h-full rounded">
        <div className="flex flex-col  p-3 space-y-2 items-start  ">
          <label htmlFor="Name" className="text-xl font-bold text-blue-50">
            Enter city name:
          </label>
          <input
            className="border-2 border-black p-2 w-full rounded  bg-transparent placeholder-blue-100 placeholder-font-bold"
            type="text"
            placeholder="search any location"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <div className="  p-3">
          <div className="text-center  ">
            <button
              className="text-xl bg-blue-900 text-white p-3 rounded w-full "
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <div className="flex items-center">
            <div className="border-t border-gray-300 flex-grow"></div>
            <div className="mx-2">or</div>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <div className="text-center">
            <button
              className="text-xl bg-blue-900 text-white p-3 rounded w-full"
              onClick={hadleGeoLocation}
            >
              location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
