import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getInsightBySlug } from '../data/insightsArticles';

/**
 * Renders inline markdown: **bold** and *italic*
 */
const renderInlineMarkdown = (text: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  // Match **bold** and *italic* patterns
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    // Text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    if (match[2]) {
      // **bold**
      parts.push(<strong key={key++} className="font-semibold text-black">{match[2]}</strong>);
    } else if (match[3]) {
      // *italic*
      parts.push(<em key={key++} className="italic text-gray-600">{match[3]}</em>);
    }

    lastIndex = match.index + match[0].length;
  }

  // Remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
};

/**
 * Parses the article markdown content into React elements.
 */
const renderArticleContent = (content: string): React.ReactNode[] => {
  const elements: React.ReactNode[] = [];
  const lines = content.split('\n');
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (trimmed === '') {
      i++;
      continue;
    }

    // Horizontal rule ---
    if (trimmed === '---') {
      elements.push(
        <hr key={key++} style={{
          border: 'none',
          borderTop: '1px solid #e5e7eb',
          margin: '48px 0'
        }} />
      );
      i++;
      continue;
    }

    // [IMMAGINE: ...] placeholders — render as styled placeholder
    if (trimmed.startsWith('[IMMAGINE:')) {
      const description = trimmed.replace(/^\[IMMAGINE:\s*/, '').replace(/\]$/, '');
      elements.push(
        <div key={key++} style={{
          margin: '40px 0',
          padding: '32px 24px',
          background: 'linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%)',
          borderRadius: '16px',
          border: '2px dashed #d4d4d4',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: '28px',
            marginBottom: '12px',
            opacity: 0.4,
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ display: 'inline-block', color: '#999' }}>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#999',
            fontStyle: 'italic',
            margin: 0,
            lineHeight: 1.5,
          }}>
            {description}
          </p>
        </div>
      );
      i++;
      continue;
    }

    // ### H3 heading
    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={key++} style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
          fontSize: '22px',
          fontWeight: 700,
          color: '#111',
          margin: '40px 0 16px',
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
        }}>
          {renderInlineMarkdown(trimmed.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // ## H2 heading
    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={key++} style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
          fontSize: '28px',
          fontWeight: 700,
          color: '#000',
          margin: '48px 0 20px',
          lineHeight: 1.3,
          letterSpacing: '-0.02em',
        }}>
          {renderInlineMarkdown(trimmed.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // Blockquote >
    if (trimmed.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        quoteLines.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <blockquote key={key++} style={{
          borderLeft: '3px solid #000',
          paddingLeft: '20px',
          margin: '24px 0',
          fontStyle: 'italic',
          color: '#555',
          fontFamily: 'Inter, sans-serif',
          fontSize: '17px',
          lineHeight: 1.7,
        }}>
          {quoteLines.map((ql, qi) => (
            <p key={qi} style={{ margin: qi === 0 ? 0 : '8px 0 0' }}>{renderInlineMarkdown(ql)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    // Unordered list (- item)
    if (trimmed.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} style={{
          listStyle: 'none',
          padding: 0,
          margin: '16px 0 24px',
        }}>
          {items.map((item, idx) => (
            <li key={idx} style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: '#444',
              lineHeight: 1.8,
              paddingLeft: '20px',
              position: 'relative',
              marginBottom: '4px',
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#999',
              }}>-</span>
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list (1. item)
    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ''));
        i++;
      }
      elements.push(
        <ol key={key++} style={{
          listStyle: 'none',
          padding: 0,
          margin: '16px 0 24px',
          counterReset: 'item',
        }}>
          {items.map((item, idx) => (
            <li key={idx} style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: '#444',
              lineHeight: 1.8,
              paddingLeft: '28px',
              position: 'relative',
              marginBottom: '4px',
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                fontWeight: 600,
                color: '#111',
              }}>{idx + 1}.</span>
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Italic-only line (closing tagline: *text*)
    if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
      const inner = trimmed.slice(1, -1);
      elements.push(
        <p key={key++} style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '17px',
          color: '#888',
          fontStyle: 'italic',
          lineHeight: 1.8,
          margin: '32px 0',
          textAlign: 'center',
        }}>
          {inner}
        </p>
      );
      i++;
      continue;
    }

    // Regular paragraph — collect consecutive non-empty, non-special lines
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].trim().startsWith('## ') &&
      !lines[i].trim().startsWith('### ') &&
      !lines[i].trim().startsWith('---') &&
      !lines[i].trim().startsWith('> ') &&
      !lines[i].trim().startsWith('- ') &&
      !lines[i].trim().startsWith('[IMMAGINE:') &&
      !(lines[i].trim().startsWith('*') && lines[i].trim().endsWith('*') && !lines[i].trim().startsWith('**') && paraLines.length > 0) &&
      !/^\d+\.\s/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i]);
      i++;
    }

    if (paraLines.length > 0) {
      const text = paraLines.join('\n');
      elements.push(
        <p key={key++} style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
          fontSize: '18px',
          color: '#444',
          lineHeight: 1.8,
          margin: '0 0 20px',
        }}>
          {renderInlineMarkdown(text)}
        </p>
      );
    }
  }

  return elements;
};

const InsightArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getInsightBySlug(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="text-3xl font-bold text-black mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Articolo non trovato
          </h1>
          <Link
            to="/insights"
            className="text-black underline hover:text-gray-600 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Torna agli Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Insights — Marco Conte</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={`https://www.derivant.ai/insights/${article.slug}`} />

        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={`https://www.derivant.ai/insights/${article.slug}`} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "datePublished": article.date,
            "dateModified": article.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.derivant.ai/insights/${article.slug}`
            },
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Derivant AI",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.derivant.ai/icon/derivant-icon.png"
              }
            },
            "description": article.excerpt
          })}
        </script>
      </Helmet>

      <div className="pt-32 pb-24 bg-white min-h-screen">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          {/* Back link */}
          <div style={{ marginBottom: '48px' }}>
            <Link
              to="/insights"
              className="inline-flex items-center space-x-3 text-black hover:text-black/70 transition-colors group bg-gray-100 border border-gray-300 rounded-full px-6 py-3"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Tutti gli Insights</span>
            </Link>
          </div>

          {/* Article header */}
          <header style={{ marginBottom: '48px' }}>
            {/* Meta info */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              flexWrap: 'wrap',
            }}>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: '#888',
                fontWeight: 400,
              }}>
                {article.dateFormatted}
              </span>
              <span style={{ color: '#ccc' }}>·</span>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: '#888',
                fontWeight: 400,
              }}>
                {article.readingTime} di lettura
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 800,
              color: '#000',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              margin: '0 0 24px',
            }}>
              {article.title}
            </h1>

            {/* Author */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingTop: '24px',
              borderTop: '1px solid #e5e7eb',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '16px',
                letterSpacing: '-0.02em',
              }}>
                MC
              </div>
              <div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  {article.author}
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#999',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Founder, Derivant AI
                </p>
              </div>
            </div>
          </header>

          {/* Article body */}
          <div style={{ marginBottom: '64px' }}>
            {renderArticleContent(article.content)}
          </div>

          {/* Author box at bottom */}
          <div style={{
            padding: '32px',
            background: '#f8f8f8',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            marginBottom: '48px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: '#111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '18px',
                flexShrink: 0,
              }}>
                MC
              </div>
              <div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#111',
                  margin: '0 0 4px',
                }}>
                  Marco Conte
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#777',
                  margin: 0,
                  lineHeight: 1.5,
                }}>
                  Founder di Derivant AI. Scrivo di intelligenza artificiale applicata al lavoro — sistemi, non trucchetti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightArticlePage;
