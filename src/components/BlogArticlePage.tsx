import React from 'react';
import { ArrowLeft, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const BlogArticlePage = () => {
  const { slug } = useParams();
  
  // Mock article data - in a real app this would come from an API
  const article = {
    date: 'January 15, 2025',
    category: 'Article',
    title: 'The Future of Workflows: Why AI Automation Is the Standard',
    description: 'Discover how businesses are replacing repetitive tasks with intelligent automation — and why early adoption gives you a competitive edge.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
  };

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header with Back Button */}
        <div className="mb-12 animate-fade-in-up">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-3 text-white hover:text-white/80 transition-colors group bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back To All Blogs</span>
          </Link>
          
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-white/70 text-lg">{article.date}</span>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">{article.category}</span>
            </div>
          </div>
        </div>
        
        {/* Article Title */}
        <div className="mb-12 animate-fade-in-up animation-delay-200">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
            {article.description}
          </p>
        </div>
        
        {/* Featured Image */}
        <div className="mb-16 animate-fade-in-up animation-delay-300">
          <div className="relative bg-gradient-to-br from-slate-900/80 via-blue-800/60 to-gray-900/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-600/30 shadow-2xl">
            {/* 3D shadow layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 to-blue-800/30 rounded-3xl transform translate-x-2 translate-y-2 blur-xl -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-gray-700/20 rounded-3xl transform translate-x-1 translate-y-1 blur-lg -z-10"></div>
            
            <img 
              src={article.image}
              alt={article.title}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
          </div>
        </div>
        
        {/* Article Content */}
        <div className="animate-fade-in-up animation-delay-400">
          <div className="prose prose-lg prose-invert max-w-none">
            
            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                The Shift from Manual to Machine
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                A few years ago, workflows meant spreadsheets, checklists, and hours of follow-up. Now, tools like Zapier, Make, and 
                AutoGPT automate entire processes—turning complex tasks into background logic. Whether you're managing leads, 
                publishing content, or onboarding clients, AI does the heavy lifting.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                Smarter Systems with Less Input
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                AI doesn't just follow rules—it makes decisions. Want to summarize feedback from 100 forms? GPT can do that instantly. 
                Want to send different emails to different user types? AI segmentation can handle that too. These tools don't just save time
                —they make your workflows smarter and more adaptive.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                Human-in-the-Loop Optional
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Modern workflows run even while you sleep. A new lead can trigger a personalized AI response, update your CRM, and 
                create a Notion page for follow-up—all without you touching anything. You can jump in when needed—but the system 
                doesn't need you to start running.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                Integration Is the New Infrastructure
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Today's workflow doesn't live in one app—it connects across many. Your form builder (Tally), project manager (ClickUp), 
                content database (Notion), and email tool (ConvertKit) are all part of one connected chain. AI agents and automation tools 
                act as the glue, moving data, triggering logic, and executing actions.
              </p>
            </div>

          </div>
          
          {/* Share Section */}
          <div className="mt-16 animate-fade-in-up animation-delay-500">
            <div className="bg-gradient-to-br from-slate-900/80 via-blue-800/60 to-gray-900/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-600/30 shadow-2xl">
              {/* 3D shadow layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 to-blue-800/30 rounded-3xl transform translate-x-2 translate-y-2 blur-xl -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-gray-700/20 rounded-3xl transform translate-x-1 translate-y-1 blur-lg -z-10"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-between">
                <h3 className="text-2xl font-bold text-white mb-6 md:mb-0">Share Blog</h3>
                
                <div className="flex items-center space-x-4">
                  {/* Facebook */}
                  <button className="group w-12 h-12 bg-slate-800/60 backdrop-blur-sm border border-slate-600/40 rounded-full flex items-center justify-center hover:bg-blue-600/80 hover:border-blue-500/60 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Facebook className="w-5 h-5 text-slate-300 group-hover:text-white drop-shadow-lg" />
                  </button>
                  
                  {/* Twitter */}
                  <button className="group w-12 h-12 bg-slate-800/60 backdrop-blur-sm border border-slate-600/40 rounded-full flex items-center justify-center hover:bg-sky-500/80 hover:border-sky-400/60 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Twitter className="w-5 h-5 text-slate-300 group-hover:text-white drop-shadow-lg" />
                  </button>
                  
                  {/* LinkedIn */}
                  <button className="group w-12 h-12 bg-slate-800/60 backdrop-blur-sm border border-slate-600/40 rounded-full flex items-center justify-center hover:bg-blue-700/80 hover:border-blue-600/60 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white drop-shadow-lg" />
                  </button>
                  
                  {/* WhatsApp */}
                  <button className="group w-12 h-12 bg-slate-800/60 backdrop-blur-sm border border-slate-600/40 rounded-full flex items-center justify-center hover:bg-green-600/80 hover:border-green-500/60 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <MessageCircle className="w-5 h-5 text-slate-300 group-hover:text-white drop-shadow-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticlePage;