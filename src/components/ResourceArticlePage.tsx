import { useParams, Link } from 'react-router-dom';

// Article content will be added by Marco
const articles: Record<string, {
  title: string;
  date: string;
  content: React.ReactNode;
}> = {
  'derivant-vs-competitors': {
    title: 'Derivant vs Competitors',
    date: '2026-01-27',
    content: (
      <>
        {/* PLACEHOLDER: Marco fornirà il contenuto dell'articolo */}
        <p>Contenuto in arrivo...</p>
      </>
    ),
  },
};

const ResourceArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#000',
        paddingTop: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.6)',
        }}>
          Article not found.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      paddingTop: '140px',
      paddingBottom: '100px',
    }}>
      <article style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Back Link */}
        <Link
          to="/resources"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.5)',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '40px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
        >
          ← Back to Resources
        </Link>

        {/* Article Header */}
        <header style={{ marginBottom: '48px' }}>
          <time style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.4)',
            display: 'block',
            marginBottom: '16px',
          }}>
            {article.date}
          </time>
          <h1 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '42px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            margin: 0,
          }}>
            {article.title}
          </h1>
        </header>

        {/* Article Content */}
        <div className="article-content" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '18px',
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: 1.8,
        }}>
          {article.content}
        </div>
      </article>

      {/* Article Styles */}
      <style>{`
        .article-content h2 {
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin: 48px 0 24px 0;
          line-height: 1.3;
        }
        .article-content h3 {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin: 36px 0 16px 0;
          line-height: 1.4;
        }
        .article-content p {
          margin: 0 0 24px 0;
        }
        .article-content ul, .article-content ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }
        .article-content li {
          margin-bottom: 12px;
        }
        .article-content strong {
          color: #ffffff;
          font-weight: 600;
        }
        .article-content a {
          color: #3B82F6;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .article-content a:hover {
          color: #60A5FA;
        }
      `}</style>
    </div>
  );
};

export default ResourceArticlePage;
