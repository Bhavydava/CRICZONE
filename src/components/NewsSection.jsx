import React from 'react';
import { Clock, Flame, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SidebarAd from './SidebarAd';
import PromoAd from './PromoAd';
import { HEADLINE_STORY, ESSENTIAL_READS, EXTENDED_BULLETIN_DATA } from '../data/newsData';

const NewsSection = () => {
  return (
    <div id="news-section" className="crick-container flex flex-col gap-8 md:gap-12 mb-20 relative z-10">
      
      {/* Main Section Header */}
      <div className="flex flex-col gap-3 md:gap-4 px-0 md:px-0 mt-4 md:mt-8">
        <div className="flex items-center gap-4">
          <div className="h-[2px] bg-crick-blue w-12 md:w-16 rounded-full" />
          <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-crick-blue">
            PREMIUM INTELLIGENCE
          </span>
        </div>
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-black leading-[1.05] tracking-tight">
          <span className="text-slate-800">The Global </span>
          <span className="text-crick-blue">Bulletin </span>
          <span className="text-slate-800">Hub</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-0 md:px-0">
        
        {/* Left: Headline Story */}
        <div className="lg:col-span-8 flex flex-col gap-6 h-full">
          {/* Header */}
          <div className="flex items-center gap-3 px-1 mb-1 md:mb-2">
            <div className="w-2 h-2 bg-crick-blue rounded-full shadow-[0_0_8px_rgba(197,165,100,0.6)]" />
            <h3 className="font-black text-[12px] md:text-[13px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-slate-800">LATEST NEWS</h3>
          </div>

          <Link to={`/news/${HEADLINE_STORY.id}`} className="relative group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] h-[500px] md:h-full md:min-h-[550px] flex flex-col justify-end p-6 md:p-14 shadow-sm border border-slate-100 cursor-pointer block">
            {/* Background Image */}
            <img 
              src={HEADLINE_STORY.image} 
              alt="Headline" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            />
              
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent hidden md:block" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start gap-5 md:gap-6 max-w-2xl">
              {/* Top Tag */}
              <div className="bg-crick-blue text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full flex items-center gap-2.5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-crick-blue/20">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                HEADLINE STORY
              </div>
              
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-slate-300 text-[10px] md:text-[11px] font-black uppercase tracking-widest mt-1 md:mt-2">
                 <div className="flex items-center gap-1.5"><Clock size={14} className="text-crick-blue"/> <span>{HEADLINE_STORY.timeAgo}</span></div>
                 <div className="flex items-center gap-1.5"><Flame size={14} className="text-crick-blue"/> <span>{HEADLINE_STORY.category}</span></div>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-[3.5rem] font-black text-crick-blue leading-[1.05] tracking-tight">
                {HEADLINE_STORY.title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-slate-200 text-sm md:text-base leading-relaxed md:leading-relaxed font-semibold line-clamp-3 md:line-clamp-none opacity-95">
                {HEADLINE_STORY.subtitle}
              </p>

              {/* Button */}
              <div className="mt-2 md:mt-4 bg-crick-blue group-hover:bg-crick-blue/90 group-hover:-translate-y-1 text-white px-6 md:px-7 py-3 md:py-4 rounded-full font-black text-[11px] md:text-xs uppercase tracking-widest transition-all shadow-lg shadow-crick-blue/20 flex items-center gap-2 group/btn">
                READ ENTIRE INSIGHT
                <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Right: Essential Reads */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center gap-3 px-1 mb-1 md:mb-2">
            <div className="w-2 h-2 bg-crick-blue rounded-full shadow-[0_0_8px_rgba(197,165,100,0.6)]" />
            <h3 className="font-black text-[12px] md:text-[13px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-slate-800">ESSENTIAL READS</h3>
          </div>

          {/* List */}
          <div className="flex flex-col gap-4">
            {ESSENTIAL_READS.map((read) => (
              <Link to={`/news/${read.id}`} key={read.id} className="bg-white border border-slate-100 rounded-[1.25rem] md:rounded-[1.5rem] p-3 md:p-4 flex items-center gap-4 md:gap-5 hover:border-crick-blue/40 transition-all cursor-pointer group shadow-sm hover:shadow-md">
                {/* Image */}
                <div className="w-24 h-16 md:w-32 md:h-24 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 relative">
                  <img src={read.image} alt={read.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                {/* Text */}
                <div className="flex flex-col gap-2 md:gap-2.5 flex-1 py-1">
                  <div className="flex text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.15em] text-slate-400 gap-2 items-center">
                    <span className="text-crick-blue shrink-0">{read.timeAgo}</span>
                    <span className="text-slate-300 shrink-0">•</span>
                    <span className="truncate">{read.category}</span>
                  </div>
                  <h4 className="text-[13px] md:text-[15px] font-bold text-slate-700 leading-snug group-hover:text-crick-blue transition-colors line-clamp-2 md:line-clamp-none">
                    {read.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-2 md:mt-4">
             <SidebarAd />
          </div>

        </div>

      </div>

      {/* Extended Bulletin Section */}
      <div className="flex flex-col gap-8 md:gap-10 mt-4 md:mt-8">
        <div className="flex flex-col gap-1.5 px-2 md:px-0">
          <h2 className="text-3xl md:text-[2.25rem] font-black text-slate-800 tracking-tight">Extended Bulletin</h2>
          <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
            DEEP COVERAGE FROM ALL FORMATS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {EXTENDED_BULLETIN_DATA.map((item) => (
            <Link to={`/news/${item.id}`} key={item.id} className="flex flex-col gap-4 md:gap-5 group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm">
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 md:top-5 left-4 md:left-5 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full z-10 border border-white/10">
                  <span className="text-[9px] font-black uppercase tracking-[0.15em] text-white/90">{item.category}</span>
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-0" />
              </div>
              <div className="flex flex-col gap-2.5 px-1 md:px-2">
                <div className="flex items-center gap-2 text-crick-blue font-black text-[10px] uppercase tracking-[0.15em]">
                  <Clock size={14} className="opacity-90" />
                  <span>{item.timeAgo}</span>
                </div>
                <h3 className="text-xl md:text-[1.35rem] font-black text-slate-800 leading-[1.25] group-hover:text-crick-blue transition-colors line-clamp-3">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Promo Ad Section */}
      <div className="w-full">
        <PromoAd />
      </div>

    </div>
  );
};

export default NewsSection;
