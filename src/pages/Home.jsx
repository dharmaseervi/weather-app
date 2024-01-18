import { useState } from "react";
import Card from "../components/Card";
import Search from "../components/Search";

const Home = () => {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const [cityName, setCityName] = useState(null);
  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Lucknow",
  ];
  const handleButtonClick = (city) => {
    setCityName(city);
  };

  console.log("weatherdata:", weatherData);
  return (
    <>
      <div className="bg-blue-500 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Weather Explorer</h1>
        <p className="text-lg">
          Your reliable source for up-to-date weather information
        </p>
      </div>
      <div className="flex flex-col lg:flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full lg:h-screen h-full justify-center items-center ">
        <div className="flex flex-col border rounded w-full  w-10/12  lg:w-96 h-5/6 m-2 p-2 space-y-2 justify-center items-center  backdrop-filter backdrop-blur-2xl  bg-opacity-60 bg-indigo-900">
          <div>
            <h1 className="text-2xl font-serif font-bold text-white">
              Suggested cities
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-1 space-y-1 lg:space-y-3  lg:space-x-0 ">
            {cities.map((city, index) => (
              <button
                key={index}
                className="bg-blue-900 text-white px-4 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 w-full sm:w-72  lg:w-64 "
                onClick={() => handleButtonClick(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
        <div className=" w-10/12 flex h-5/6 lg:px-2">
          <div className="grid grid-cols-4 gap-2  w-full h-full ">
            {/* div1 */}
            <div className="lg:col-span-2  col-span-4">
              <Search
                query={query}
                setQuery={setQuery}
                setWeatherData={setWeatherData}
                cityName={cityName}
                setCityName={setCityName}
              />
            </div>
            {/* div2 */}
            <div className="lg:col-span-2  col-span-4">
              <Card weatherData={weatherData} />
            </div>
            {/* div3 */}
            <div className="lg:col-span-2 lg:row-span-2 col-span-4 ">
              <div className="w-full h-full border flex justify-center flex-col items-center rounded  backdrop-filter backdrop-blur-2xl  bg-opacity-60 bg-indigo-900 ">
                <div className="flex flex-col justify-center items-center space-y-2 p-2">
                  <h1 className="text-4xl font-serif font-bold text-white">
                    Feels Like
                  </h1>
                  <h1 className="text-2xl font-serif font-bold text-white">
                    {weatherData?.main?.feels_like
                      ? `${Math.round(weatherData.main.feels_like - 273.15)}`
                      : "10"}
                    &deg;
                  </h1>
                </div>
              </div>
            </div>
            {/* div4 */}
            <div className="lg:col-span-1 lg:row-span-3 col-span-2 row-span-2">
              <div className="w-full h-full border flex justify-center flex-col items-center rounded backdrop-filter backdrop-blur-2xl bg-opacity-60 bg-indigo-900 ">
                <div className="flex flex-col justify-center items-center space-y-2 p-2">
                  <h1 className="text-2xl font-serif font-bold text-white">
                    Sunrise
                  </h1>
                  <h1 className="text-2xl font-serif font-bold text-white text-center">
                    {weatherData?.sys?.sunrise
                      ? new Date(weatherData.sys.sunrise * 1000).toLocaleString(
                          "en-US",
                          { timeZoneName: "short" }
                        )
                      : "10"}
                  </h1>
                </div>
              </div>
            </div>
            {/* div5 */}
            <div className="lg:col-span-1 lg:row-span-3 col-span-2 row-span-2 ">
              <div className="w-full h-full border flex justify-center flex-col items-center rounded backdrop-filter backdrop-blur-2xl  bg-opacity-60 bg-indigo-900 ">
                <div className="flex flex-col justify-center items-center space-y-2 p-2">
                  <h1 className="text-2xl font-serif font-bold text-white">
                    sunset
                  </h1>
                  <h1 className="text-2xl font-serif font-bold text-white text-center">
                    {weatherData?.sys?.sunset
                      ? new Date(weatherData.sys.sunset * 1000).toLocaleString(
                          "en-US",
                          { timeZoneName: "short" }
                        )
                      : "10"}
                  </h1>
                </div>
              </div>
            </div>
            {/* div6 */}
            <div className="lg:col-span-1 col-span-2 ">
              <div className="w-full h-full border flex justify-center flex-col items-center rounded backdrop-filter backdrop-blur-2xl  bg-opacity-60 bg-indigo-900 ">
                <h1 className="text-2xl font-serif font-bold text-white">
                  Wind
                </h1>
                <p className="text-xl font-serif font-bold text-white">
                  {weatherData?.wind?.speed || "loading"}
                </p>
              </div>
            </div>
            {/* div7 */}
            <div className="lg:col-span-1 col-span-2  ">
              <div className="w-full h-full border flex justify-center flex-col  rounded items-center backdrop-filter backdrop-blur-2xl  bg-opacity-60 bg-indigo-900 ">
                <h1 className="text-2xl font-serif font-bold text-white">
                  Humidity
                </h1>
                <p className="text-xl font-serif font-bold text-white ">
                  {weatherData?.main?.humidity || "loading"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
