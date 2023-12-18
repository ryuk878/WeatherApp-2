  import axios from "axios";
  import { apikey } from "../constants/constants";

  const forecastEndPoint = (params) =>
    `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${params.cityName}}&days=${params.days}=3&aqi=no&alerts=no`;
  const locationsEndPoint = (params) =>
    `https://api.weatherapi.com/v1/search.json?key=${apikey}&q=${params.cityName}`;
  console.log({ apikey });

  const apiCall = async (endpoint) => {
    const options = {
      method: "GET",
      url: endpoint,
    };
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  };

  export const fetchWeatherForecast = (params) => {
    let forecastUrl = forecastEndPoint(params);
    return apiCall(forecastUrl);
  };

  export const fetchLocations = (params) => {
    let locations = locationsEndPoint(params);
    return apiCall(locations);
  };
