import React, { useState, useCallback, useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Navbar from "./components/navbar/navbar.jsx";
import MainScreen from "./components/mainScreen/mainScreen";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  useEffect(() => {
    // You can perform any additional initialization or logic here
  }, []);

  // Handle changing the selected location
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  // Handle updating the weather forecast
  const handleWeatherUpdate = (forecast) => {
    setWeatherForecast(forecast);
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpg')}
      style={styles.backgroundImage}
      blurRadius={40}
    >
      <Navbar
        onLocationChange={handleLocationChange}
        onWeatherUpdate={handleWeatherUpdate}
      />
      <MainScreen
        selectedLocation={selectedLocation}
        weatherForecast={weatherForecast}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;