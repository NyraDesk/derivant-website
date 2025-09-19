import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 'future-of-workflows',
    category: 'Article',
    date: 'Jan 15, 2025',
    title: 'The Future of Workflows: Why AI Automation Is the Standard',
    description: 'Discover how businesses are replacing repetitive tasks with intelligent automation — and why early adoption gives you...',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 'ai-assistants-operations',
    category: 'Resources',
    date: 'Jan 10, 2025',
    title: '5 Ways AI Assistants Are Transforming Operations',
    description: 'From handling support queries to managing schedules, see how AI assistants are streamlining internal workflows ...',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  }
];

const BlogPage = () => {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Latest News <span className="italic text-gray-400">Articles</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stay up to date with the latest improvements and new features
          </p>
        </div>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up animation-delay-200">
          {articles.map((article, index) => (
            <Link 
              key={article.id}
              to={`/blog/${article.id}`}
              className="block group"
            >
              <div className="relative bg-gradient-to-br from-slate-900/80 via-blue-800/60 to-gray-900/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-600/30 hover:border-slate-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* 3D shadow layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 to-blue-800/30 rounded-3xl transform translate-x-2 translate-y-2 blur-xl -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-gray-700/20 rounded-3xl transform translate-x-1 translate-y-1 blur-lg -z-10"></div>
                
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
                      <span className="text-white text-sm font-medium">{article.category}</span>
                    </div>
                    <span className="text-white/70 text-sm">{article.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-white/90 transition-colors">
                    {article.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    {article.description}
                  </p>
                  
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl border border-slate-700/40">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;