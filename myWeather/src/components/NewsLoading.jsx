import '../styles/NewsSection.css';

export default function NewsLoading() {
    return (
      <div className="news-loading">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="news-card shimmer">
            <div className="shimmer-image"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line short"></div>
          </div>
        ))}
      </div>
    );
  }