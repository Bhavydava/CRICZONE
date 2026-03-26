import React, { useState } from 'react';
import { Search, User, Menu, ChevronDown, X } from 'lucide-react';
import Logo from '../assets/Logo.png';

const NAV_ITEMS = [
  "Teams", "Live Matches", "News", "Advertise", "About", "Contact"
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col z-50 fixed top-0">
      {/* Single Unified Premium Navbar */}
      <div className="nav-wrapper w-full relative z-50">
        <div className="crick-container py-4 flex items-center justify-between gap-6">
          
          {/* Section 1: Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center cursor-pointer hover:scale-105 transition-all duration-300">
              <img src={Logo} alt="CricZone Official Logo" className="h-15 md:h-20 lg:h-18 object-contain" />
            </div>
          </div>

          {/* Section 2: Navigation Items (Centered on Desktop) */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item, i) => (
              <div key={i} className="nav-link flex items-center gap-1 group">
                {item}
                <ChevronDown size={10} className="opacity-40 group-hover:translate-y-0.5 transition-transform" />
              </div>
            ))}
          </div>

          {/* Section 3: Actions (Search, User, Menu) */}
          <div className="flex items-center gap-2 md:gap-4 ml-auto">
            <div className="flex items-center gap-1 md:gap-3 text-slate-500">
              <button className="nav-icon-btn">
                <Search size={20} />
              </button>
              <button className="nav-icon-btn">
                <User size={22} />
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden bg-slate-50 p-2.5 rounded-xl text-slate-700 hover:bg-[#c5a564] hover:text-white transition-all shadow-sm border border-slate-100"
              >
                {isMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Premium Slide-Down Overlay) */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Drawer Content */}
        <div className={`absolute top-[72px] md:top-[84px] left-0 right-0 bg-white shadow-2xl transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-10'}`}>
          <div className="p-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-4 bg-slate-50 hover:bg-crick-blue/5 rounded-2xl transition-all group cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-slate-700 font-bold uppercase tracking-wider text-sm group-hover:text-[#c5a564]">
                  {item}
                </span>
                <ChevronDown size={18} className="text-slate-300 -rotate-90" />
              </div>
            ))}
          </div>
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col gap-2">
            <div className="text-[10px] uppercase font-black tracking-[3px] text-slate-400 mb-2">Social Connect</div>
            <div className="flex gap-4">
               {/* Placeholders for social icons */}
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 border border-slate-100 hover:bg-crick-blue hover:text-white transition-all cursor-pointer">F</div>
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 border border-slate-100 hover:bg-crick-blue hover:text-white transition-all cursor-pointer">T</div>
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 border border-slate-100 hover:bg-crick-blue hover:text-white transition-all cursor-pointer">I</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

