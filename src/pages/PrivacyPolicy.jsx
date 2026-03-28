import React from 'react';
import { Eye, ShieldCheck, Lock, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">

      <main className="flex-grow pt-[100px] md:pt-[140px] pb-20">
        <div className="crick-container max-w-4xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-100 shadow-sm text-green-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <ShieldCheck size={16} strokeWidth={2.5} />
              <span>Data Protection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-4">
              <span className="text-slate-900">Privacy </span>
              <span className="text-[#c5a564]">Policy</span>
            </h1>
            <p className="text-slate-500 max-w-xl text-lg">
               We are committed to protecting your personal information and your right to privacy as a user of CricZone.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40 divide-y divide-slate-100">
             
             {/* Section 1 */}
             <div className="py-8 first:pt-0">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-green-50 text-green-500 flex items-center justify-center"><Eye size={18} /></div>
                   Information Collection
                </h3>
                <p className="text-slate-600 leading-loose">
                   We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
                </p>
             </div>

             {/* Section 2 */}
             <div className="py-8">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center"><Lock size={18} /></div>
                   Information Use
                </h3>
                <p className="text-slate-600 leading-loose mb-6">
                   CricZone uses your personal information for several purposes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                      "To facilitate account creation and logon process.",
                      "To send marketing and promotional communications.",
                      "To deliver targeted advertising to you.",
                      "To request feedback and to contact you about your use of our website."
                   ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start bg-slate-50 p-4 rounded-xl border border-slate-50">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#c5a564] mt-2 flex-shrink-0" />
                         <span className="text-slate-600 text-sm">{item}</span>
                      </div>
                   ))}
                </div>
             </div>

             {/* Section 3 */}
             <div className="py-8">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center"><Globe size={18} /></div>
                   Cookie Policy
                </h3>
                <p className="text-slate-600 leading-loose">
                   We use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
                </p>
             </div>

             {/* Section 4 */}
             <div className="py-8 last:pb-0">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4">Security</h3>
                <p className="text-slate-600 leading-loose mb-8">
                   We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                </p>
                <div className="p-8 bg-slate-900 rounded-[2rem] text-center text-white relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c5a564] to-transparent" />
                   <h3 className="text-lg font-black uppercase tracking-widest text-[#c5a564] mb-2">Questions?</h3>
                   <p className="text-white/60 text-sm mb-6">If you have any questions or comments about this policy, you may contact us via email.</p>
                   <div className="text-xl font-black">privacy@criczone.com</div>
                </div>
             </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
