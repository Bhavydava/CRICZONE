import React from 'react';
import { TrendingUp, Target, BarChart, Users, Megaphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Advertise = () => {
  const stats = [
    { label: "Monthly Users", value: "2M+", icon: <Users size={24} /> },
    { label: "Page Views", value: "15M+", icon: <BarChart size={24} /> },
    { label: "Engagement Rate", value: "6.8%", icon: <TrendingUp size={24} /> },
    { label: "Global Reach", value: "120+", icon: <Target size={24} /> }
  ];

  const adSpecs = [
    { title: "Premium Header Banners", desc: "Highest visibility slot at the top of every page.", size: "728 x 90px" },
    { title: "Native Content Ads", desc: "Seamlessly integrated into the news feed.", size: "Custom" },
    { title: "Sidebar Sticky Ads", desc: "Persistent visibility as users scroll.", size: "300 x 600px" },
    { title: "Video Pre-rolls", desc: "Short video ads before match highlights.", size: "16:9 Aspect" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">

      <main className="flex-grow pt-[100px] md:pt-[140px] pb-20">
        <div className="crick-container max-w-6xl mx-auto px-4 md:px-8">
          
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#c5a564]/20 shadow-sm text-[#c5a564] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Megaphone size={16} strokeWidth={2.5} />
              <span>Partner with CricZone</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black uppercase tracking-tighter leading-tight mb-6">
              <span className="text-slate-900">Reach the </span>
              <span className="text-[#c5a564]">Cricket World</span>
            </h1>
            <p className="text-slate-500 max-w-3xl text-lg leading-relaxed">
              CricZone is the fastest growing digital destination for cricket enthusiasts worldwide. 
              Elevate your brand presence through our highly engaged audience and premium advertising solutions.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="text-[#c5a564] mb-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: About Audience */}
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">
                Why Advertise <span className="text-[#c5a564]">With Us?</span>
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  "Highly targeted audience of cricket enthusiasts and young demographics.",
                  "Premium environment with 100% brand-safe content.",
                  "Fastest growing cricket platform with high retention rates.",
                  "Customized ad solutions tailored for your brand KPIs."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 text-[#c5a564]">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="text-slate-600 text-lg">{text}</p>
                  </div>
                ))}
              </div>
              
              <Link to="/contact" className="inline-flex items-center gap-3 bg-[#c5a564] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-[0.15em] text-sm hover:bg-slate-900 transition-all shadow-lg shadow-[#c5a564]/30 mt-4 group w-fit">
                Start Campaigning <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Ad Slots Visual */}
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 border border-slate-100 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c5a564] to-transparent opacity-80" />
               <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
                  <div className="h-12 w-full bg-[#c5a564]/10 border border-dashed border-[#c5a564]/40 rounded-lg flex items-center justify-center text-[#c5a564] font-black text-[10px] uppercase tracking-widest">Premium Header (728x90)</div>
                  <div className="flex gap-4 h-[250px]">
                    <div className="flex-1 bg-slate-100 rounded-lg border border-slate-200"></div>
                    <div className="w-1/3 bg-[#c5a564]/10 border border-dashed border-[#c5a564]/40 rounded-lg flex items-center justify-center text-[#c5a564] font-black text-[10px] uppercase tracking-widest rotate-90 whitespace-nowrap px-4">Sidebar Ad (300x600)</div>
                  </div>
                  <div className="h-20 w-full bg-[#c5a564]/10 border border-dashed border-[#c5a564]/40 rounded-lg flex items-center justify-center text-[#c5a564] font-black text-[10px] uppercase tracking-widest">Native Placement</div>
               </div>
            </div>
          </div>

          {/* Ad Specs Grid */}
          <div className="mb-20">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-10 text-center">Available Ad Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {adSpecs.map((spec, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{spec.title}</h4>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{spec.desc}</p>
                  <div className="inline-block px-3 py-1 rounded bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Size: {spec.size}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-[#c5a564]/10 via-transparent to-transparent" />
             <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 leading-tight">Ready to boost your brand on <span className="text-[#c5a564]">CricZone?</span></h3>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  Download our full media kit or talk to an advertising expert today for a custom quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                   <Link to="/contact" className="bg-[#c5a564] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                      Contact Sales
                   </Link>
                   <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all">
                      Download Kit
                   </button>
                </div>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Advertise;
