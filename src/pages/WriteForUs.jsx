import React from 'react';
import { PenTool, FileText, CheckCircle, Users, Send, Target, Zap } from 'lucide-react';

const WriteForUs = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">

      <main className="flex-grow pt-[100px] md:pt-[140px] pb-20">
        <div className="crick-container max-w-5xl mx-auto px-4 md:px-8">
          
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#c5a564]/20 shadow-sm text-[#c5a564] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <PenTool size={16} strokeWidth={2.5} />
              <span>Join Our Content Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-4">
              <span className="text-slate-900">Write For </span>
              <span className="text-[#c5a564]">CricZone</span>
            </h1>
            <p className="text-slate-500 max-w-2xl text-lg">
              Are you a cricket fanatic with a knack for storytelling? Share your analysis, match reports, and opinions with millions of cricket fans globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-14 h-14 bg-slate-50 text-[#c5a564] rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <Target size={28} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Target Audience</h3>
                <p className="text-slate-500 text-sm">Reach millions of passionate cricket fans and professionals worldwide.</p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-14 h-14 bg-slate-50 text-[#c5a564] rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Fast Exposure</h3>
                <p className="text-slate-500 text-sm">Get your articles featured on our high-traffic home page and socials.</p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-14 h-14 bg-slate-50 text-[#c5a564] rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <Users size={28} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Growing Community</h3>
                <p className="text-slate-500 text-sm">Join a network of professional cricket analysts and sports writers.</p>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
             {/* Left: Guidelines */}
             <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#c5a564]/10 to-transparent pointer-events-none" />
                <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Submission Guidelines</h2>
                <div className="flex flex-col gap-6">
                   {[
                      "Articles must be 800+ words of original content.",
                      "Content must be focused on trending cricket topics or deep-dive analysis.",
                      "Include at least 3 relevant high-quality images or statistics.",
                      "No promotional content or excessive outgoing links.",
                      "Proper grammar and proofreading is mandatory."
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                         <div className="mt-1 text-[#c5a564]"><CheckCircle size={20} /></div>
                         <p className="text-white/80 leading-relaxed font-medium">{item}</p>
                      </div>
                   ))}
                </div>
                <div className="mt-10 p-4 bg-white/5 border border-white/10 rounded-2xl text-sm italic text-[#c5a564]">
                   Note: We reserve the right to edit content for formatting and SEO purposes.
                </div>
             </div>

             {/* Right: Submission Form */}
             <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-slate-100 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Send Your Pitch</h2>
                <form className="flex flex-col gap-6">
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                      <input type="text" placeholder="Your Name" className="bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white text-slate-800 font-bold" />
                   </div>
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                      <input type="email" placeholder="email@example.com" className="bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white text-slate-800 font-bold" />
                   </div>
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Topic Idea / Article Link</label>
                      <input type="text" placeholder="What do you want to write about?" className="bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white text-slate-800 font-bold" />
                   </div>
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Short Bio</label>
                      <textarea rows="3" placeholder="Tell us briefly about your writing experience..." className="bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white text-slate-800 font-bold resize-none"></textarea>
                   </div>
                   <button className="bg-slate-900 text-white p-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#c5a564] transition-all flex items-center justify-center gap-3">
                      Submit Pitch <Send size={18} />
                   </button>
                </form>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default WriteForUs;
