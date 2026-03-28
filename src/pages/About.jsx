import React from 'react';
import { ShieldCheck, Target, Zap, Globe2 } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">
      <main className="flex-grow pt-[100px] md:pt-[140px] pb-20">
        <div className="crick-container max-w-5xl mx-auto px-4 md:px-8">
          
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#c5a564]/20 shadow-sm text-[#c5a564] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <ShieldCheck size={16} strokeWidth={2.5} />
              <span>Premium Cricket Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black uppercase tracking-tighter leading-tight">
              <span className="text-slate-900">About </span>
              <span className="text-[#c5a564]">CricZone</span>
            </h1>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 p-8 md:p-12 lg:p-16 relative overflow-hidden group">
            {/* Very subtle background gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-[#c5a564]/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c5a564] to-transparent opacity-70" />

            <div className="relative z-10 prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-loose text-base md:text-lg mb-8">
                <strong className="text-slate-900 font-black">CricZone</strong> was forged from a singular passion: to elevate the way fans, analysts, and purists experience the game of cricket. We recognized that the modern fan demands more than just basic scorecards—they crave deep analytical insights, real-time momentum shifts, and a beautifully designed platform that matches the intensity of the sport itself.
              </p>
              
              <p className="text-slate-600 leading-loose text-base md:text-lg mb-8">
                Our architecture is built on cutting-edge data pipelines that process thousands of match events per second. From the high-octane drama of the IPL and global T20 franchise leagues to the strategic battlegrounds of international Test cricket, we ensure that you are always the fastest to know what's happening on the pitch.
              </p>

              <p className="text-slate-600 leading-loose text-base md:text-lg">
                Whether you are a casual follower tracking live commentary, or a hardcore analyst diving into the micro-statistics of an inning, CricZone is engineered to be your definitive, unparalleled companion. Welcome to the future of cricket coverage.
              </p>
            </div>
          </div>

          {/* Core Values / Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#c5a564] mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-3">Real-Time Speed</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Lightning-fast updates and score processing ensuring you are always ahead of the broadcast.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#c5a564] mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-3">Deep Analytics</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Advanced win predictors, pitch maps, and granular player statistics crafted for true purists.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#c5a564] mb-6">
                <Globe2 size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-3">Global Coverage</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Comprehensive tracking of domestic leagues, international fixtures, and women's cricket globally.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default About;
