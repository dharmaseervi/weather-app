const Card = ({ weatherData }) => {
  return (
    <div className="bg-transaparent rounded w-full h-full border flex justify-center flex-col items-center  backdrop-filter backdrop-blur-2xl  bg-opacity-60 bg-indigo-900 ">
      <div className="flex flex-col justify-center items-center space-y-2 p-2">
        <h1 className="text-4xl font-serif font-bold text-white">
          {weatherData?.name || "New delhi"}
        </h1>
        <h1 className="text-2xl font-serif font-bold text-white">
          {weatherData?.main?.temp
            ? `${Math.round(weatherData.main.temp - 273.15)}°`
            : "10"}
          &deg;
        </h1>
        <p className="text-xl font-serif font-bold text-white">
          {weatherData?.weather?.[0]?.description || "sunny"}
        </p>
        <div className="flex space-x-2">
          <p className="text-xl font-serif font-bold text-white">
            {" "}
            H:
            {weatherData?.main?.temp_max
              ? `${Math.round(weatherData.main.temp_max - 273.15)}°`
              : "23"}
            &deg;
          </p>
          <p className="text-xl font-serif font-bold text-white">
            {" "}
            L:
            {weatherData?.main?.temp_min
              ? `${Math.round(weatherData.main.temp_min - 273.15)}°`
              : "10"}
            &deg;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
