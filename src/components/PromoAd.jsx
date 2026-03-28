import React from 'react';
import { Sparkles, Trophy, ChevronRight } from 'lucide-react';

const PromoAd = () => {
  return (
    <div className="w-full relative z-10 py-6 md:py-8">
      <div className="crick-container px-0 md:px-6 lg:px-0" >
        <div className="relative w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#161c2d] border border-slate-800/50 hover:border-crick-blue/30 transition-all flex items-center justify-between px-6 py-8 md:px-12 md:py-10 cursor-pointer group shadow-sm hover:shadow-md">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-crick-blue/10 to-transparent pointer-events-none" />
          
          {/* Left Content */}
          <div className="flex flex-col gap-3 relative z-10 max-w-2xl">
            {/* Tags */}
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-black bg-crick-blue text-white px-2.5 py-1 rounded uppercase tracking-[0.15em] shadow-sm">
                Sponsor
              </span>
              <div className="flex items-center gap-1.5 text-crick-blue font-black uppercase tracking-[0.1em] text-[9.5px]">
                <Sparkles size={12} className="opacity-90" />
                <span>Premium Offer</span>
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl md:text-[2.25rem] font-black italic tracking-tight leading-none group-hover:scale-[1.01] transition-transform origin-left mt-1">
              <span className="text-white">WIN EXCLUSIVE </span>
              <span className="text-crick-blue">IPL TICKETS 2026</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xs md:text-[13px] text-slate-400 font-semibold max-w-lg mt-1 group-hover:text-slate-300 transition-colors">
              Join our fantasy league today and stand a chance to win VIP access to the grand finale.
            </p>

            {/* CTA */}
            <button className="flex items-center gap-2 group/btn mt-2 md:mt-3 w-fit">
              <span className="text-[11px] font-black text-crick-blue uppercase tracking-[0.2em] border-b-2 border-transparent group-hover/btn:border-crick-blue pb-0.5 transition-all">Join Now</span>
              <ChevronRight size={14} className="text-crick-blue group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Icon Placeholder */}
          <div className="hidden md:flex absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none z-0">
             <Trophy size={110} strokeWidth={1.5} className="text-slate-800/80 group-hover:text-crick-blue/20 group-hover:scale-110 transition-all duration-700" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PromoAd;
