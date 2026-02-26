import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { insightsArticles } from '../data/insightsArticles';

const InsightsPage = () => {
  return (
    <>
      <Helmet>
        <title>Insights | Marco Conte — Idee pratiche sull'intelligenza artificiale</title>
        <meta name="description" content="Idee pratiche sull'intelligenza artificiale. Sistemi, strategie e metodi concreti per usare l'AI nel lavoro. Di Marco Conte." />
        <link rel="canonical" href="https://www.derivant.ai/insights" />
        <meta property="og:title" content="Insights | Marco Conte" />
        <meta property="og:description" content="Idee pratiche sull'intelligenza artificiale. Sistemi, strategie e metodi concreti per usare l'AI nel lavoro." />
        <meta property="og:url" content="https://www.derivant.ai/insights" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insights | Marco Conte" />
        <meta name="twitter:description" content="Idee pratiche sull'intelligenza artificiale. Di Marco Conte." />
      </Helmet>

      <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h1
              className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight"
              style={{
                fontFamily: 'Syne, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                fontWeight: 800,
                letterSpacing: '-0.04em'
              }}
            >
              Insights
            </h1>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                fontWeight: 300
              }}
            >
              Idee pratiche sull'intelligenza artificiale.
              <br />
              <span style={{ fontWeight: 500, color: '#111' }}>Di Marco Conte.</span>
            </p>
          </div>

          {/* Articles List */}
          <div className="max-w-3xl mx-auto flex flex-col gap-0">
            {insightsArticles.map((article, index) => (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                className="block group"
              >
                <article
                  className="py-10 border-b border-gray-200 transition-all duration-300 group-hover:pl-4"
                  style={index === 0 ? { borderTop: '1px solid #e5e7eb' } : undefined}
                >
                  {/* Date + Reading time + Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      {article.dateFormatted}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      {article.readingTime} di lettura
                    </span>
                    <span className="text-gray-300">·</span>
                    <span
                      className="text-sm text-gray-800"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                    >
                      {article.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-2xl lg:text-3xl font-bold text-black mb-3 leading-tight group-hover:text-gray-700 transition-colors duration-300"
                    style={{
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                      fontWeight: 700,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="text-gray-600 text-lg leading-relaxed"
                    style={{
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Read arrow */}
                  <div className="mt-4 flex items-center gap-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Leggi
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightsPage;
