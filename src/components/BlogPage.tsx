import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const articles = [
  {
    id: 'derivant-vs-gamma-powerpoint-2026',
    category: 'Comparison',
    date: 'Jan 27, 2026',
    title: 'Derivant vs Gamma vs PowerPoint: Perché l\'AI Generativa non basta più',
    description: 'Scopri perché Derivant è l\'alternativa professionale a Gamma e PowerPoint per chi cerca un design d\'elite e risultati da studio creativo.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    id: 'privacy-app-note-local-first',
    category: 'Privacy',
    date: 'Jan 27, 2026',
    title: 'Privacy nelle Presentazioni AI: Come Derivant Protegge i Tuoi Dati',
    description: 'Scopri come funziona la privacy nelle piattaforme AI per presentazioni e perché Derivant è costruito con un approccio privacy-first.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 'ai-assistants-operations',
    category: 'Resources',
    date: 'Jan 10, 2026',
    title: '5 Modi in cui l\'AI sta Trasformando le Presentazioni Professionali',
    description: 'Dall\'ideazione alla delivery, come l\'intelligenza artificiale sta rivoluzionando il modo in cui creiamo e presentiamo.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  }
];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Derivant AI — News e Approfondimenti sulle Presentazioni AI</title>
        <meta name="description" content="Articoli, guide e approfondimenti su presentazioni AI, pitch deck, strategie di comunicazione e produttività professionale." />
        <link rel="canonical" href="https://www.derivant.ai/blog" />
        <meta property="og:title" content="Blog | Derivant AI" />
        <meta property="og:description" content="Articoli, guide e approfondimenti su presentazioni AI, pitch deck e produttività professionale." />
        <meta property="og:url" content="https://www.derivant.ai/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Derivant AI" />
        <meta name="twitter:description" content="Articoli, guide e approfondimenti su presentazioni AI e produttività professionale." />
      </Helmet>
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight"
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.04em'
            }}
          >
            Latest News <span className="italic text-gray-600">Articles</span>
          </h1>
          <p
            className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              fontWeight: 300
            }}
          >
            Stay up to date with the latest improvements and new features
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="block group"
            >
              <div
                className="bg-[#E8DCC8] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full text-sm font-medium"
                      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                    >
                      {article.category}
                    </div>
                    <span
                      className="text-gray-600 text-sm"
                      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                    >
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-2xl lg:text-3xl font-bold text-black mb-4 leading-tight"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                  >
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="text-gray-700 text-lg leading-relaxed mb-8"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                  >
                    {article.description}
                  </p>

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogPage;