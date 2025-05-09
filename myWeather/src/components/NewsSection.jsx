import { useState, useEffect } from 'react';
import { fetchNews } from '../services/api';
import NewsDisplay from './NewsDisplay';

export default function NewsSection() {
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNewsData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const news = await fetchNews();
        setNewsData(news);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadNewsData();
  }, []);

  return (
    <div className="news-section">
      {isLoading && <div className="loading">Loading news...</div>}
      {error && <div className="error">{error}</div>}
      <NewsDisplay news={newsData} />
    </div>
  );
}