import '../styles/WeatherSection.css';

export default function WeatherIcon({ icon, description }) {
    const getIconUrl = (iconCode) => {
        return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    };

    return (
        <div className="weather-icon">
            {icon && (
                <img 
                    src={getIconUrl(icon)} 
                    alt={description || 'Weather icon'}
                    className="weather-img"
                />
            )}
        </div>
    );
}