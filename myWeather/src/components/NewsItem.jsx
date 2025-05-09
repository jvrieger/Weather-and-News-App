import '../styles/NewsSection.css';

export default function NewsItem({ item }) {
    return (
      <article className="news-card">
        {item.multimedia?.[0] && (
          <img 
            src={item.multimedia[0].url} 
            alt={item.multimedia[0].caption} 
            className="news-image"
          />
        )}
        <div className="news-content">
          <h3 className="news-title">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </h3>
          <p className="news-abstract">{item.abstract}</p>
          <p className="news-byline">{item.byline}</p>
        </div>
      </article>
    );
  }