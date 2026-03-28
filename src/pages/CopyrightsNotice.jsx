import React from 'react';
import { Copyright, ShieldAlert, Award, FileText } from 'lucide-react';

const CopyrightsNotice = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">

      <main className="flex-grow pt-[100px] md:pt-[140px] pb-20">
        <div className="crick-container max-w-4xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-red-50 shadow-sm text-red-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Copyright size={16} strokeWidth={2.5} />
              <span>Property Protection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-4">
              <span className="text-slate-900">Copyrights </span>
              <span className="text-[#c5a564]">Notice</span>
            </h1>
            <p className="text-slate-500 max-w-xl text-lg">
               CricZone protects its original content and respects the proprietary rights of our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mb-20">
             
             {/* General Notice */}
             <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40 divide-y divide-slate-100">
                <div className="py-8 first:pt-0">
                    <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center"><ShieldAlert size={20} /></div>
                       Summary of Ownership
                    </h3>
                    <p className="text-slate-600 leading-loose">
                       All original text, data, and analytical models used on <strong className="text-slate-900 font-black">CricZone</strong> are the intellectual property of CricZone and protected by international copyright laws. Reproduction, redistribution, or modification of any material on this website without express written consent is strictly prohibited.
                    </p>
                </div>

                <div className="py-8">
                    <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-6 flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center"><Award size={20} /></div>
                       Third Party Content
                    </h3>
                    <p className="text-slate-600 leading-loose mb-6">
                       Some content on this site, including but not limited to, team logos, player images, and certain match data, belong to their respective copyright holders (such as IPL, ICC, or BCCI). We use such materials for informational purposes only.
                    </p>
                    <div className="flex flex-wrap gap-4">
                       {['IPL Content', 'ICC Data', 'BCCI Logos', 'Franchise Marks'].map((tag) => (
                          <div key={tag} className="px-4 py-2 rounded-full border border-slate-100 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                             {tag}
                          </div>
                       ))}
                    </div>
                </div>

                <div className="py-8 last:pb-0">
                    <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#c5a564] flex items-center justify-center shadow-lg"><FileText size={20} /></div>
                       Reporting Infringement
                    </h3>
                    <p className="text-slate-600 leading-loose mb-8">
                       If you believe that any content appearing on CricZone infringes on your own copyright, please refer to our <a href="/dmca" className="text-[#c5a564] font-black underline">DMCA Policy</a> page for instructions on how to file a formal report with our legal team.
                    </p>
                    <div className="p-8 bg-slate-50 rounded-2xl text-center border border-slate-100 border-dashed">
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Notice ID</div>
                       <div className="text-2xl font-black text-slate-900">CZ-COPY-2026</div>
                       <p className="text-slate-400 text-xs mt-2 uppercase tracking-tight">CricZone Intellectual Property Office</p>
                    </div>
                </div>
             </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default CopyrightsNotice;
