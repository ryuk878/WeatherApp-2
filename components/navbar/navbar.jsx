import React, { useState, useCallback, useEffect } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { debounce } from "lodash";
import {
  fetchLocations,
  fetchWeatherForecast,
} from "../../weatherApi/weatherApi";
import { styledNavbar, styledDropdown, Iconstyles } from "./navbar.styles";

const Navbar = ({ onLocationChange, onWeatherUpdate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  useEffect(() => {
    if (selectedLocation) {
      // Fetch weather forecast when a location is selected
      fetchWeather(selectedLocation);
    }
  }, [selectedLocation]);

  const handleSearch = async (value) => {
    if (value.length > 2) {
      const data = await fetchLocations({ cityName: value });
      setLocations(data);
    }
  };

  const handleWeatherClick = (location) => {
    setSelectedLocation(location);
    onLocationChange(location); // Update the selected location in App
    setIsVisible(false);
  };

  const fetchWeather = async (location) => {
    const data = await fetchWeatherForecast({
      cityName: location.name,
      days: 3, // Adjust the number of days as needed
    });
    setWeatherForecast(data);
    onWeatherUpdate(data); // Update the weather forecast in App
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  return (
    <>
      {isVisible ? (
        <View style={styledNavbar.StyledNavbar}>
          <TextInput
            onChangeText={handleTextDebounce}
            placeholderTextColor='#ffffffa6'
            placeholder='Search City'
          />
        </View>
      ) : null}
      {locations.length > 0 && isVisible ? (
        <View style={styledDropdown.Dropdown}>
          {locations.map((loc, index) => (
            <TouchableOpacity
              onPress={() => handleWeatherClick(loc)}
              key={index}
            >
              <Text style={styledDropdown.DrowndownMenu}>
                {loc.name} {loc.country}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
      <View style={Iconstyles.StyledIcon}>
        <Icon
          onPress={() => setIsVisible(!isVisible)}
          name='search'
          size={25}
          color='#000000'
        />
      </View>
    </>
  );
};

export default Navbar;
