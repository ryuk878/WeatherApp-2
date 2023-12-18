import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MainScreen = ({ selectedLocation, weatherForecast }) => {
  const renderWeatherInfo = () => {
    if (weatherForecast && weatherForecast.current) {
      const { temp_c, condition, wind_kph, last_updated, cloud } =
        weatherForecast.current;
      const { name, country } = selectedLocation;

      const updateTime = new Date(last_updated).toLocaleTimeString();

      return (
        <View style={styles.container}>
          <Text style={styles.header}>
            Weather for {name}, {country}:
          </Text>
          <View style={styles.weatherInfoContainer}>
            <Image
              source={{ uri: `https:${condition.icon}` }}
              style={styles.weatherIcon}
            />
            <Text style={styles.weatherText}>Temperature: {temp_c}°C</Text>
            <Text style={styles.weatherText}>Wind Speed: {wind_kph} km/h</Text>
            <Text style={styles.weatherText}>Cloudiness: {cloud}%</Text>
            <Text style={styles.weatherText}>Time: {updateTime}</Text>
          </View>
        </View>
      );
    }

    return <Text>No weather data available</Text>;
  };

  return <View style={styles.mainScreen}>{renderWeatherInfo()}</View>;
};

const styles = StyleSheet.create({
  mainScreen: {
    marginTop: 120, 
  },
  container: {
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  weatherInfoContainer: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 60,
    height: 60,
  },
  weatherText: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default MainScreen;
