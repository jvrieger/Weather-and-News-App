const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const NYT_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchWeather = async (zip, country) => {
  const geoUrl = new URL("http://api.openweathermap.org/geo/1.0/zip");
  geoUrl.searchParams.append("zip", `${zip},${country}`);
  geoUrl.searchParams.append("appid", API_KEY);

  const locationResponse = await fetch(geoUrl);
  const locationData = await locationResponse.json();
  if (locationData.cod) throw new Error(locationData.message);

  const weatherUrl = new URL("https://api.openweathermap.org/data/2.5/weather");
  weatherUrl.searchParams.append("lat", locationData.lat);
  weatherUrl.searchParams.append("lon", locationData.lon);
  weatherUrl.searchParams.append("appid", API_KEY);
  weatherUrl.searchParams.append("units", "imperial");

  const weatherResponse = await fetch(weatherUrl);
  return await weatherResponse.json();
};

export const fetchNews = async () => {
  const url = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${NYT_API_KEY}`;
  
  const response = await fetch(url);
  const data = await response.json();
  return data.results.slice(0, 20); // Get top 5 stories
};