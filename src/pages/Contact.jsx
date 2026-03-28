import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">
      <main className="flex-grow pt-[100px] md:pt-[140px] pb-20">
        <div className="crick-container max-w-6xl mx-auto px-4 md:px-8">
          
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#c5a564]/20 shadow-sm text-[#c5a564] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <MessageSquare size={16} strokeWidth={2.5} />
              <span>Get In Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black uppercase tracking-tighter leading-tight mb-4">
              <span className="text-slate-900">Contact </span>
              <span className="text-[#c5a564]">CricZone</span>
            </h1>
            <p className="text-slate-500 max-w-2xl text-lg">
              Have questions or feedback? We'd love to hear from you. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Contact Info */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c5a564]/5 to-transparent blur-2xl pointer-events-none" />
                
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">Direct Contact</h3>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#c5a564] border border-[#c5a564]/10">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</h4>
                      <p className="text-lg font-bold text-slate-800 hover:text-[#c5a564] cursor-pointer transition-colors">support@criczone.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#c5a564] border border-[#c5a564]/10">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Call Us</h4>
                      <p className="text-lg font-bold text-slate-800 hover:text-[#c5a564] cursor-pointer transition-colors">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#c5a564] border border-[#c5a564]/10">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Office Location</h4>
                      <p className="text-lg font-bold text-slate-800">CricZone Tower, Sector 44,<br />Gurugram, Haryana, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-slate-100">
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 text-center">Follow Us</h4>
                  <div className="flex justify-center gap-4">
                    {['FB', 'TW', 'IG', 'LI'].map((social) => (
                      <div key={social} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 font-bold text-xs border border-slate-100 hover:bg-[#c5a564] hover:text-white transition-all cursor-pointer">
                        {social}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-[#c5a564] rounded-[2rem] p-8 text-white relative overflow-hidden group">
                <Globe2 size={120} className="absolute -bottom-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Global Support</h3>
                <p className="text-white/80 leading-relaxed max-w-xs">
                  Our team is spread across 5 countries to provide 24/7 coverage of every match worldwide.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">Send Message</h3>
              
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white transition-all text-slate-800 font-bold"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white transition-all text-slate-800 font-bold"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="General Inquiry"
                    className="bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white transition-all text-slate-800 font-bold"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Message</label>
                  <textarea 
                    rows="5"
                    placeholder="Write your message here..."
                    className="bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white transition-all text-slate-800 font-bold resize-none"
                  ></textarea>
                </div>

                <button className="group relative w-full bg-slate-900 hover:bg-black text-white p-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 overflow-hidden shadow-lg shadow-slate-900/20 active:scale-95">
                  <div className="absolute inset-0 w-0 group-hover:w-full bg-[#c5a564] transition-all duration-300 pointer-events-none opacity-40" />
                  <span className="relative z-10">Send Message</span>
                  <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Contact;
