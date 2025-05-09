import { useState, useEffect, useCallback } from 'react';
import { fetchWeather } from '../services/api';
import WeatherDisplay from './WeatherDisplay';
import LocationInput from './LocationInput';
import '../styles/WeatherSection.css'

export default function WeatherSection() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ zip: '19010', country: 'US' });

  const loadWeatherData = useCallback(async (zip, country) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const weather = await fetchWeather(zip, country);
      setWeatherData({ 
        ...weather, 
        coordinates: {
          lat: weather.coord.lat,
          lon: weather.coord.lon
        }
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadWeatherData(location.zip, location.country);
  }, [loadWeatherData, location]);

  const handleLocationSubmit = (newZip, newCountry) => {
    setLocation({ zip: newZip, country: newCountry });
  };

  return (
    <div className="weather-section">
      <LocationInput 
        initialZip={location.zip}
        initialCountry={location.country}
        onSubmit={handleLocationSubmit}
      />
      {isLoading && <div className="loading">Loading weather...</div>}
      {error && <div className="error">{error}</div>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}