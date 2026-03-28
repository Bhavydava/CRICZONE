import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Flame, ChevronLeft, Share2, MessageSquare, Bookmark } from 'lucide-react';
import { ALL_NEWS } from '../data/newsData';
import SidebarAd from '../components/SidebarAd';

const NewsDetails = () => {
  const { newsId } = useParams();
  const news = ALL_NEWS.find(item => item.id === newsId);

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">News not found</h2>
        <Link to="/" className="text-crick-blue hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-[130px] md:pt-[170px] pb-20">
      <div className="crick-container">
        {/* Navigation / Breadcrumbs */}
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
          <Link to="/" className="hover:text-crick-blue transition-colors">Home</Link>
          <span>/</span>
          <Link to="/#news-section" className="hover:text-crick-blue transition-colors">News</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate max-w-[200px] md:max-w-md">{news.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Header Section */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="bg-crick-blue/10 text-crick-blue px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                  {news.category}
                </span>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                  <Clock size={14} />
                  <span>{news.timeAgo}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-slate-800 leading-[1.1] tracking-tight">
                {news.title}
              </h1>

              {news.subtitle && (
                <p className="text-lg md:text-xl text-slate-600 font-semibold leading-relaxed border-l-4 border-crick-blue pl-6 py-2">
                  {news.subtitle}
                </p>
              )}

              {/* Action Bar */}
              <div className="flex items-center justify-between py-4 border-y border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-slate-500 hover:text-crick-blue cursor-pointer transition-colors">
                    <Share2 size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Share</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 hover:text-crick-blue cursor-pointer transition-colors">
                    <Bookmark size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Save</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 hover:text-crick-blue cursor-pointer transition-colors">
                  <MessageSquare size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Comments</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-xl">
              <img 
                src={news.image} 
                alt={news.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-slate prose-lg max-w-none">
              <div 
                className="text-slate-700 leading-[1.8] font-medium space-y-6"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>

            {/* Tag Cloud */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-200">
              {['IPL 2026', 'T20 Cricket', 'Cricket News', 'Highlights'].map((tag) => (
                <span key={tag} className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-lg text-xs font-bold cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm sticky top-24">
              <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
                <Flame size={20} className="text-crick-blue" />
                Latest Stories
              </h3>
              
              <div className="flex flex-col gap-6">
                {ALL_NEWS.filter(item => item.id !== newsId).slice(0, 4).map((item) => (
                  <Link to={`/news/${item.id}`} key={item.id} className="group flex gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-black text-crick-blue uppercase tracking-widest">{item.timeAgo}</span>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-crick-blue transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <SidebarAd />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
