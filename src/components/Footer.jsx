import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send, ArrowUp, MessageCircle } from 'lucide-react';
import Logo from '../assets/Footer_Logo.png'; 
import BackToTop from './BackToTop';

const FOOTER_DATA = {
  teams: [
    { name: "India", href: "#" },
    { name: "Australia", href: "#" },
    { name: "England", href: "#" },
    { name: "New Zealand", href: "#" },
    { name: "South Africa", href: "#" }
  ],
  players: [
    { name: "Shubman Gill", href: "#" },
    { name: "Rohit Sharma", href: "#" },
    { name: "Babar Azam", href: "#" },
    { name: "Virat Kohli", href: "#" },
    { name: "Daryl Mitchell", href: "#" }
  ],
  series: [
    { name: "Indian Premier League (IPL)", href: "#" },
    { name: "Caribbean Premier League (CPL)", href: "#" },
    { name: "Pakistan Super League (PSL)", href: "#" },
    { name: "Big Bash League (BBL)", href: "#" },
    { name: "T20 Blast", href: "#" }
  ],
  more: [
    { name: "Press Release", href: "#" },
    { name: "Player Interviews", href: "#" },
    { name: "Cricket Appeal", href: "#" },
    { name: "Cricket Analysis", href: "#" },
    { name: "Fan Polls", href: "#" }
  ],
  bottomLinks: [
    { name: "ABOUT", href: "#" },
    { name: "CONTACT", href: "#" },
    { name: "FEEDBACK", href: "#" },
    { name: "CAREERS", href: "#" },
    { name: "ADVERTISE WITH US", href: "#" },
    { name: "WRITE FOR US", href: "#" },
    { name: "DMCA", href: "#" },
    { name: "DISCLAIMER", href: "#" }
  ],
  legalLinks: [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Copyrights Notice", href: "#" }
  ],
  socials: [
    { icon: <Facebook size={16} className="fill-current" />, href: "#" },
    { icon: <Twitter size={16} className="fill-current" />, href: "#" },
    { icon: <Instagram size={16} />, href: "#" },
    { icon: <Youtube size={16} />, href: "#" },
    { icon: <Linkedin size={16} className="fill-current" />, href: "#" },
    { icon: <Send size={16} className="-ml-0.5" />, href: "#" }
  ]
};

const Footer = () => {


  return (
    <footer className="w-full bg-[#c5a564] pt-12 pb-6 flex flex-col items-center">
      <div className="crick-container max-w-[1200px] w-full">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-black/10">
          
          {/* Teams */}
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center justify-center w-full gap-4">
                <div className="h-px bg-black/10 flex-1 hidden md:block" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 text-center">TOP TEAMS</h4>
                <div className="h-px bg-black/10 flex-1 hidden md:block" />
             </div>
             <ul className="flex flex-col gap-3 items-center mt-2">
               {FOOTER_DATA.teams.map((link, i) => (
                 <li key={i}>
                   <a href={link.href} className="text-xs font-semibold text-slate-800 hover:text-black transition-colors">
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
          </div>

          {/* Players */}
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center justify-center w-full gap-4">
                <div className="h-px bg-black/10 flex-1 hidden md:block" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 text-center">TOP PLAYERS</h4>
                <div className="h-px bg-black/10 flex-1 hidden md:block" />
             </div>
             <ul className="flex flex-col gap-3 items-center mt-2">
               {FOOTER_DATA.players.map((link, i) => (
                 <li key={i}>
                   <a href={link.href} className="text-xs font-semibold text-slate-800 hover:text-black transition-colors">
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
          </div>

          {/* Series */}
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center justify-center w-full gap-4">
                <div className="h-px bg-black/10 flex-1 hidden md:block" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 text-center">TOP SERIES</h4>
                <div className="h-px bg-black/10 flex-1 hidden md:block" />
             </div>
             <ul className="flex flex-col gap-3 items-center text-center mt-2">
               {FOOTER_DATA.series.map((link, i) => (
                 <li key={i}>
                   <a href={link.href} className="text-xs font-semibold text-slate-800 hover:text-black transition-colors">
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
          </div>

          {/* More */}
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center justify-center w-full gap-4">
                <div className="h-px bg-black/10 flex-1 hidden md:block" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 text-center">MORE</h4>
                <div className="h-px bg-black/10 flex-1 hidden md:block" />
             </div>
             <ul className="flex flex-col gap-3 items-center mt-2">
               {FOOTER_DATA.more.map((link, i) => (
                 <li key={i}>
                   <a href={link.href} className="text-xs font-semibold text-slate-800 hover:text-black transition-colors">
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 lg:gap-8 lg:pb-2">
          
          {/* Left: Logo & Apps */}
          <div className="flex flex-col gap-6 items-center lg:items-start w-full lg:w-auto">
             <div className="flex items-center gap-2">
               <img src={Logo} alt="Logo" className="h-25 object-contain" />
             </div>
          </div>

          {/* Right: Links & Socials */}
          <div className="flex flex-col gap-8 items-center lg:items-end w-full lg:w-auto">
             
             {/* Bottom Menu Links */}
             <ul className="flex flex-wrap justify-center lg:justify-end gap-x-5 gap-y-3 max-w-2xl px-4 lg:px-0">
                {FOOTER_DATA.bottomLinks.map((link, i) => {
                  const internalRoutes = {
                    "ABOUT": "/about",
                    "CONTACT": "/contact",
                    "ADVERTISE WITH US": "/advertise",
                    "FEEDBACK": "/feedback",
                    "WRITE FOR US": "/write-for-us",
                    "DMCA": "/dmca",
                    "DISCLAIMER": "/disclaimer"
                  };
                  
                  return (
                    <li key={i}>
                      {internalRoutes[link.name] ? (
                        <Link to={internalRoutes[link.name]} className="text-[11px] font-black text-slate-900 hover:text-black uppercase tracking-widest transition-colors mb-1">
                          {link.name}
                        </Link>
                      ) : (
                        <a href={link.href} className="text-[11px] font-black text-slate-900 hover:text-black uppercase tracking-widest transition-colors mb-1">
                          {link.name}
                        </a>
                      )}
                    </li>
                  );
                })}
             </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-black/10">
          <p className="text-[11px] font-semibold text-slate-800">
            © 2013 - {new Date().getFullYear()} CRICZONE All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {FOOTER_DATA.legalLinks.map((link, i) => {
               const legalRoutes = {
                 "Terms and Conditions": "/terms",
                 "Privacy Policy": "/privacy-policy",
                 "Copyrights Notice": "/copyrights"
               };
               
               return (
                  legalRoutes[link.name] ? (
                    <Link key={i} to={legalRoutes[link.name]} className="text-[11px] font-semibold text-slate-800 hover:text-black transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a key={i} href={link.href} className="text-[11px] font-semibold text-slate-800 hover:text-black transition-colors">
                      {link.name}
                    </a>
                  )
               );
            })}
          </div>
        </div>

      </div>
      
      {/* Back to Top Component */}
      <BackToTop />
    </footer>
  );
};

export default Footer;
