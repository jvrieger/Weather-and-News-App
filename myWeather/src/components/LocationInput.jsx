import { useState } from 'react';
import '../styles/LocationInput.css';

export default function LocationInput({ initialZip, initialCountry, onSubmit }) {
    const [zip, setZip] = useState(initialZip);
    const [country, setCountry] = useState(initialCountry);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(zip, country);
    };

    return (
        <form onSubmit={handleSubmit} className="location-input">
            <div className="input-group">
                <label htmlFor="zip">Zip Code:</label>
                <input
                    id="zip"
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="Enter zip code"
                    required
                />
            </div>
            <div className="input-group">
                <label htmlFor="country">Country Code:</label>
                <input
                    id="country"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="US, GB, etc."
                    required
                    maxLength="2"
                    style={{ width: '60px' }}
                />
            </div>
            <button type="submit" className="submit-btn">
                Get Weather
            </button>
        </form>
    );
}