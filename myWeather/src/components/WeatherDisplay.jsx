import WeatherLocation from './WeatherLocation';
import WeatherIcon from './WeatherIcon';
import WeatherDetails from './WeatherDetails';
import '../styles/WeatherSection.css';

export default function WeatherDisplay({ data }) {
    return (
        <div className="weather-display">
            <WeatherLocation 
                name={data.locationName || data.name} 
                coordinates={data.coordinates} 
            />
            <div className="weather-main">
                <WeatherIcon icon={data.weather?.[0]?.icon} description={data.weather?.[0]?.description} />
                <WeatherDetails 
                    temp={data.main?.temp} 
                    feelsLike={data.main?.feels_like}
                    description={data.weather?.[0]?.description}
                    humidity={data.main?.humidity}
                    windSpeed={data.wind?.speed}
                />
            </div>
        </div>
    );
}