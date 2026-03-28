import React from 'react';
import { AlertTriangle, Info, ShieldCheck, Globe } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">

      <main className="flex-grow pt-[100px] md:pt-[140px] pb-20">
        <div className="crick-container max-w-4xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-yellow-100 shadow-sm text-yellow-600 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <AlertTriangle size={16} strokeWidth={2.5} />
              <span>Legal Notice</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-4">
              <span className="text-slate-900">Disclaimer </span>
              <span className="text-[#c5a564]">Policy</span>
            </h1>
            <p className="text-slate-500 max-w-xl text-lg">
               Please read this disclaimer carefully before using the CricZone website. By using our services, you agree to the following terms.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
             
             {/* Main Disclaimer Box */}
             <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-50/50 blur-3xl rounded-full" />
                
                <div className="prose prose-slate max-w-none relative z-10">
                   <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-100"><Info size={20} /></div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 m-0">General Information</h3>
                   </div>
                   <p className="text-slate-600 leading-loose mb-8">
                      All information on this website (<strong className="text-slate-900">https://criczone.com</strong>) is published in good faith and for general information purpose only. <strong className="text-slate-900 font-bold">CricZone</strong> does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website is strictly at your own risk.
                   </p>

                   <div className="flex items-center gap-3 mb-6 mt-10">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-100"><Globe size={20} /></div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 m-0">External Links</h3>
                   </div>
                   <p className="text-slate-600 leading-loose mb-8">
                      From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
                   </p>

                   <div className="flex items-center gap-3 mb-6 mt-10">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-100"><ShieldCheck size={20} /></div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 m-0">Consent</h3>
                   </div>
                   <p className="text-slate-600 leading-loose">
                      By using our website, you hereby consent to our disclaimer and agree to its terms. This disclaimer was last updated on March 28, 2026. If we update, amend or make any changes to this document, those changes will be prominently posted here.
                   </p>
                </div>
             </div>

             {/* Small Warning Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800/50 hover:-translate-y-1 transition-transform">
                   <h4 className="text-sm font-black uppercase tracking-widest text-[#c5a564] mb-3">No Reliability Warranty</h4>
                   <p className="text-white/60 text-sm leading-relaxed">
                      While we aim for 100% accuracy in cricket stats and scores, live data may have delays or discrepancies. Always refer to official match sources for critical data.
                   </p>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:-translate-y-1 transition-transform">
                   <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-3">Liability Limitation</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">
                      CricZone will not be liable for any losses and/or damages in connection with the use of our website or reliance on any material presented here.
                   </p>
                </div>
             </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Disclaimer;
