import React from 'react';
import { Trophy, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';

const SidebarAd = () => {
  return (
    <div className="bg-gradient-to-br from-crick-dark to-slate-900 rounded-2xl overflow-hidden shadow-sm shadow-crick-blue/10 border border-white/5 group cursor-pointer hover:border-crick-blue/20 transition-all p-5 flex flex-col gap-4 relative">
       {/* Badge */}
       <div className="flex items-center justify-between relative z-10">
          <span className="text-[9px] font-black bg-crick-blue text-white px-2 py-0.5 rounded uppercase tracking-widest shadow-lg shadow-crick-blue/20">Ad</span>
          <ExternalLink size={12} className="text-slate-500 group-hover:text-crick-blue transition-colors" />
       </div>

       {/* Content */}
       <div className="flex flex-col gap-1 relative z-10">
          <h3 className="text-sm font-black text-white italic tracking-tight leading-tight group-hover:text-crick-blue transition-colors">
            PREDICT & WIN <span className="text-crick-blue">₹50 LAKH*</span>
          </h3>
          <p className="text-[10px] text-slate-400 font-bold leading-relaxed">
            Join the biggest fantasy league and win daily prizes!
          </p>
       </div>

       <button className="bg-white/5 group-hover:bg-white/10 border border-white/10 rounded-xl py-2 flex items-center justify-center gap-2 transition-all">
          <span className="text-[10px] font-black text-crick-blue uppercase tracking-widest">Register Now</span>
          <ChevronRight size={14} className="text-crick-blue group-hover:translate-x-1 transition-transform" />
       </button>

       {/* Decor */}
       <div className="absolute top-0 right-0 w-32 h-32 bg-crick-blue/5 blur-3xl rounded-full" />
       <Sparkles size={40} className="absolute -bottom-4 -right-4 text-crick-blue opacity-5 group-hover:opacity-20 transition-all duration-700 -rotate-12 group-hover:rotate-0" />
    </div>
  );
};

export default SidebarAd;
