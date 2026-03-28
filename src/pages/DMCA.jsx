import React from 'react';
import { ShieldAlert, FileWarning, Mail, Info } from 'lucide-react';

const DMCA = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">

      <main className="flex-grow pt-[100px] md:pt-[140px] pb-20">
        <div className="crick-container max-w-4xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-red-100 shadow-sm text-red-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <ShieldAlert size={16} strokeWidth={2.5} />
              <span>Legal Compliance</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-4">
              <span className="text-slate-900">DMCA </span>
              <span className="text-[#c5a564]">Policy</span>
            </h1>
            <p className="text-slate-500 max-w-xl text-lg">
              CricZone respects the intellectual property rights of others. We take copyright infringement seriously and will respond to all valid takedown notices.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40 divide-y divide-slate-100">
             
             {/* Section 1 */}
             <div className="py-8 first:pt-0">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center"><FileWarning size={18} /></div>
                   Takedown Notices
                </h3>
                <p className="text-slate-600 leading-loose text-base">
                   If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on this site, you may notify our copyright agent, as set forth in the Digital Millennium Copyright Act of 1998 (DMCA). For your complaint to be valid under the DMCA, you must provide the following information when providing notice of the claimed copyright infringement.
                </p>
             </div>

             {/* Section 2 */}
             <div className="py-8">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-6 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center"><Info size={18} /></div>
                   Required Information
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                      "A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.",
                      "Identification of the copyrighted work claimed to have been infringed.",
                      "Identification of the material that is claimed to be infringing or to be the subject of infringing activity.",
                      "Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and email address.",
                      "A statement that you have a good faith belief that use of the material is not authorized by the copyright owner.",
                      "A statement that the information in the notification is accurate, and under penalty of perjury, that you are the authorized person."
                   ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start bg-slate-50/50 p-4 rounded-xl border border-slate-50">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#c5a564] mt-2 flex-shrink-0" />
                         <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                      </li>
                   ))}
                </ul>
             </div>

             {/* Section 3 */}
             <div className="py-8 last:pb-0">
                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl" />
                   <h3 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-3">
                      <Mail size={24} className="text-[#c5a564]" />
                      Submit Notice
                   </h3>
                   <p className="text-white/60 mb-8 leading-loose">
                      All DMCA notices should be sent to our designated agent at the following email address. Please include "DMCA Takedown Notice" in the subject line for faster processing.
                   </p>
                   <div className="inline-flex flex-col md:flex-row gap-4 md:gap-10">
                      <div>
                         <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Email Address</div>
                         <div className="text-xl font-bold text-[#c5a564] hover:underline cursor-pointer">legal@criczone.com</div>
                      </div>
                      <div className="h-px md:h-12 w-full md:w-px bg-white/10" />
                      <div>
                         <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Business Hours</div>
                         <div className="text-slate-300 font-bold italic">Mon - Fri: 9:00 AM - 6:00 PM IST</div>
                      </div>
                   </div>
                </div>
             </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default DMCA;
