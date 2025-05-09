import '../styles/WeatherSection.css';

export default function WeatherLocation({ name, coordinates }) {
    return (
        <div className="weather-location">
            <h2>{name}</h2>
            {coordinates && (
                <p className="coordinates">
                    Latitude: {coordinates.lat.toFixed(4)}, Longitude: {coordinates.lon.toFixed(4)}
                </p>
            )}
        </div>
    );
}