import NewsItem from './NewsItem';
import NewsLoading from './NewsLoading';
import '../styles/NewsSection.css';

export default function NewsDisplay({ news, isLoading, error }) {
  if (isLoading) return <NewsLoading />;
  if (error) return <div className="news-error">{error}</div>;
  if (!news?.length) return <div className="no-news">No news available</div>;

  return (
    <div className="news-section">
      <h2 className="news-heading">Today's Top Art Stories</h2>
      <div className="news-grid">
        {news.map((item) => (
          <NewsItem key={item.url} item={item} />
        ))}
      </div>
    </div>
  );
}