import React from 'react';
import { Sparkles, Trophy, ChevronRight } from 'lucide-react';

const BannerAd = () => {
  return (
    <div className="w-full pt-32 md:pt-36 pb-4 bg-slate-50 relative z-10">
      <div className="crick-container">
        <div className="relative w-full h-44 md:h-52 rounded-3xl overflow-hidden shadow-2xl shadow-crick-blue/10 bg-[#0f172a] from-crick-dark to-slate-800 border-2 border-white/5 hover:border-crick-blue/20 transition-all group flex items-center px-8 md:px-16 cursor-pointer">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-full bg-[#0f172a] from-crick-blue/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-crick-blue/10 blur-3xl rounded-full" />
          <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-48 h-48 bg-crick-blue/5 blur-3xl rounded-full" />

          {/* Content */}
          <div className="flex flex-col gap-2 relative z-10 py-6 md:py-8">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black bg-crick-blue text-white px-2 py-0.5 rounded uppercase tracking-widest shadow-lg shadow-crick-blue/20">Sponsor</span>
              <div className="flex items-center gap-1 text-[#ffb800]">
                <Sparkles size={12} />
                <span className="text-[10px] font-black uppercase tracking-tighter">Premium Offer</span>
              </div>
            </div>
            
            <h2 className="text-xl md:text-3xl font-black text-white italic tracking-tight leading-none group-hover:scale-[1.02] transition-transform origin-left">
              WIN EXCLUSIVE <span className="text-crick-blue">IPL TICKETS</span> 2026
            </h2>
            
            <p className="text-xs md:text-sm text-slate-400 font-bold max-w-md hidden md:block">
              Join our fantasy league today and stand a chance to win VIP access to the grand finale.
            </p>

            <button className="flex items-center gap-2 group/btn mt-2 w-fit">
              <span className="text-[11px] font-black text-crick-blue uppercase tracking-widest border-b-2 border-crick-blue/0 group-hover/btn:border-crick-blue transition-all">Join Now</span>
              <ChevronRight size={14} className="text-crick-blue group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Icon Image Placeholder */}
          <div className="absolute right-12 md:right-24 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
             <Trophy size={100} className="text-crick-blue group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAd;
