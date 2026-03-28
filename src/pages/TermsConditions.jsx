import React from 'react';
import { Scale, Gavel, CheckCircle, Info } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">

      <main className="flex-grow pt-[100px] md:pt-[140px] pb-20">
        <div className="crick-container max-w-4xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Scale size={16} strokeWidth={2.5} />
              <span>Legal Agreement</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-4">
              <span className="text-slate-900">Terms & </span>
              <span className="text-[#c5a564]">Conditions</span>
            </h1>
            <p className="text-slate-500 max-w-xl text-lg">
               By accessing and using CricZone, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40 divide-y divide-slate-100">
             
             {/* Section 1 */}
             <div className="py-8 first:pt-0">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center"><Gavel size={18} /></div>
                   1. Use of Services
                </h3>
                <p className="text-slate-600 leading-loose mb-4">
                   CricZone provides cricket scores, news, and analysis. You agree to use the services only for purposes that are permitted by these Terms and any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                   {[
                      "No unauthorized data scraping.",
                      "Personal use only, no redistribution.",
                      "Respect community guidelines.",
                      "No malicious site interference."
                   ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-center text-sm font-bold text-slate-500 bg-slate-50 p-4 rounded-xl">
                         <CheckCircle size={16} className="text-[#c5a564]" />
                         {item}
                      </div>
                   ))}
                </div>
             </div>

             {/* Section 2 */}
             <div className="py-8">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center"><Info size={18} /></div>
                   2. Intellectual Property
                </h3>
                <p className="text-slate-600 leading-loose">
                   All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of CricZone or its content suppliers and protected by international copyright laws.
                </p>
             </div>

             {/* Section 3 */}
             <div className="py-8">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4">3. Limitation of Liability</h3>
                <p className="text-slate-600 leading-loose">
                   CricZone will not be liable for any damages of any kind arising from the use of this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages. We do not guarantee that the site or its servers are free of viruses or other harmful components.
                </p>
             </div>

             {/* Section 4 */}
             <div className="py-8 last:pb-0">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4">4. Governing Law</h3>
                <p className="text-slate-600 leading-loose">
                   These Terms and Conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
                <div className="mt-10 p-6 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
                   <div className="text-sm font-medium opacity-80">Last Updated: March 28, 2026</div>
                   <button className="bg-[#c5a564] text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">Accept Terms</button>
                </div>
             </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default TermsConditions;
