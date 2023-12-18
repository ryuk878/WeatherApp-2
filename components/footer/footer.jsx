import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherForecastFooter = ({ forecastData }) => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerTitle}>Next 3 Days Forecast:</Text>
      <View style={styles.forecastContainer}>
        {forecastData.map((day, index) => (
          <View key={index} style={styles.forecastItem}>
            <Text>{day.date}</Text>
            <Text>{day.day.condition.text}</Text>
            <Text>Max Temp: {day.day.maxtemp_c}°C</Text>
            <Text>Min Temp: {day.day.mintemp_c}°C</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  forecastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  forecastItem: {
    alignItems: 'center',
  },
});

export default WeatherForecastFooter;