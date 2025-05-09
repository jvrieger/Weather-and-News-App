import '../styles/WeatherSection.css'

export default function WeatherDetails({ temp, feelsLike, description, humidity, windSpeed }) {
    return (
        <div className="weather-details">
            <p className="temperature">{Math.round(temp)}°F</p>
            <p className="description">{description}</p>
            <p className="feels-like">Feels like: {Math.round(feelsLike)}°F</p>
            <div className="secondary-details">
                <span>Humidity: {humidity}%</span>
                <span>Wind: {Math.round(windSpeed)} mph</span>
            </div>
        </div>
    );
}