import React, { useState } from 'react';
import { Search, User, Menu, ChevronDown, X } from 'lucide-react';
import Logo from '../assets/Logo.png';

import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { name: "Teams", path: "/teams" },
  { name: "LIVE SCORE", path: "/#ipl-fixtures" },
  { name: "News", path: "/#news-section" },
  { name: "Advertise", path: "/advertise" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full flex flex-col z-50 fixed top-0">
      {/* Single Unified Premium Navbar */}
      <div className="nav-wrapper w-full relative z-50">
        <div className="crick-container py-4 flex items-center justify-between gap-6">
          
          {/* Section 1: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center cursor-pointer hover:scale-105 transition-all duration-300">
              <img src={Logo} alt="CricZone Official Logo" className="h-15 md:h-20 lg:h-18 object-contain" />
            </Link>
          </div>

          {/* Section 2: Navigation Items (Centered on Desktop) */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item, i) => (
              <Link to={item.path} key={i} className="nav-link flex items-center gap-1 group text-[10px] font-black uppercase tracking-[0.15em]">
                {item.name}
                <ChevronDown size={10} className="opacity-40 group-hover:translate-y-0.5 transition-transform" />
              </Link>
            ))}
          </div>

          {/* Section 3: Actions (Search, User, Menu) */}
          <div className="flex items-center gap-2 md:gap-4 ml-auto">
            <div className="flex items-center gap-1 md:gap-3 text-slate-500">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="nav-icon-btn hover:text-[#c5a564] transition-colors"
                aria-label="Open Search"
              >
                <Search size={22} />
              </button>
              <Link to="/login" className="nav-icon-btn hover:text-[#c5a564] transition-colors">
                <User size={22} />
              </Link>
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

      {/* Full-Screen Search Overlay (Premium) */}
      <div className={`fixed inset-0 z-[60] flex flex-col items-center bg-white transition-all duration-500 transform ${isSearchOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
        <div className="w-full flex justify-end p-6 md:p-10">
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#c5a564] hover:text-white transition-all transform hover:rotate-90 duration-300"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="w-full max-w-4xl px-6 flex flex-col items-center justify-center h-[50vh]">
           <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">What are you looking for?</div>
           <div className="w-full relative group">
              <input 
                autoFocus={isSearchOpen}
                type="text" 
                placeholder="Search Teams, Players, Series..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full bg-transparent border-b-2 border-slate-100 py-6 pr-12 text-3xl md:text-5xl font-black text-slate-900 focus:outline-none focus:border-[#c5a564] transition-all placeholder-slate-200"
              />
              <Search size={40} className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-200 group-focus-within:text-[#c5a564] transition-colors" />
           </div>
           
           <div className="w-full mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex flex-col gap-4">
                 <div className="text-[10px] font-black uppercase tracking-widest text-[#c5a564]">Trending</div>
                 {["IPL 2026", "CSK vs MI", "Virat Kohli", "Live Score"].map(item => (
                   <div key={item} className="text-sm font-bold text-slate-400 hover:text-slate-900 cursor-pointer transition-colors flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#c5a564] transition-colors" />
                      {item}
                   </div>
                 ))}
              </div>
              <div className="flex flex-col gap-4">
                 <div className="text-[10px] font-black uppercase tracking-widest text-[#c5a564]">Quick Links</div>
                 {["Teams", "Fixtures", "News", "Players"].map(item => (
                   <div key={item} className="text-sm font-bold text-slate-400 hover:text-slate-900 cursor-pointer transition-colors flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#c5a564] transition-colors" />
                      {item}
                   </div>
                 ))}
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
              <Link 
                to={item.path}
                key={i} 
                className="flex items-center justify-between p-4 bg-slate-50 hover:bg-crick-blue/5 rounded-2xl transition-all group cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-slate-700 font-bold uppercase tracking-wider text-sm group-hover:text-[#c5a564]">
                  {item.name}
                </span>
                <ChevronDown size={18} className="text-slate-300 -rotate-90" />
              </Link>
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

