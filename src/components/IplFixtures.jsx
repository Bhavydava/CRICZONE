import React from 'react';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

const FIXTURES_DATA = [
  {
    id: 1,
    matchLabel: "1ST MATCH",
    date: "SAT MAR 28",
    time: "7:30 PM IST",
    venue: "M.CHINNASWAMY STADIUM, BENGALURU",
    team1: { name: "Royal Challengers Bengaluru", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png" },
    team2: { name: "Sunrisers Hyderabad", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png" },
  },
  {
    id: 2,
    matchLabel: "2ND MATCH",
    date: "SUN MAR 29",
    time: "7:30 PM IST",
    venue: "WANKHEDE STADIUM, MUMBAI",
    team1: { name: "Mumbai Indians", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png" },
    team2: { name: "Kolkata Knight Riders", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png" },
  },
  {
    id: 3,
    matchLabel: "3RD MATCH",
    date: "MON MAR 30",
    time: "7:30 PM IST",
    venue: "BARSAPARA CRICKET STADIUM, GUWAHATI",
    team1: { name: "Rajasthan Royals", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png" },
    team2: { name: "Chennai Super Kings", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png" },
  }
];

const IplFixtures = () => {
  return (
    <div className="crick-container flex flex-col gap-10 pt-10 pb-8 relative z-10 w-full">
      {/* Centered Header */}
      <div className="flex flex-col items-center justify-center gap-3 text-center px-4 md:px-0 mt-4 md:mt-8">
        <div className="flex items-center gap-3">
          <Calendar size={28} className="text-crick-blue" />
          <h2 className="text-3xl md:text-[2.75rem] font-black text-slate-800 dark:text-white uppercase tracking-tight">
            IPL 2026 FIXTURES
          </h2>
        </div>
        <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-slate-500">
          THE MOST ANTICIPATED UPCOMING GLOBAL FIXTURES DYNAMICALLY LOADED
        </p>
      </div>

      {/* Fixtures Timeline */}
      <div className="relative max-w-[1000px] mx-auto w-full mt-4 md:mt-6 px-4 md:px-0">
        {FIXTURES_DATA.map((match) => (
          <div key={match.id} className="flex flex-col md:flex-row gap-6 md:gap-10 relative mb-6 group">
            
            {/* Left Timeline Info */}
            <div className="w-full md:w-36 flex flex-col items-start md:items-end text-left md:text-right pt-2 md:pt-4 relative z-10 pl-6 md:pl-0 shrink-0">
               {/* Timeline Dot & Line for Mobile (hidden on md) */}
               <div className="absolute left-0 top-6 w-[1px] h-[calc(100%+1.5rem)] bg-slate-200 dark:bg-slate-800 md:hidden" />
               <div className="absolute left-[-4px] top-[22px] w-2.5 h-2.5 rounded-full border-2 border-crick-blue bg-white dark:bg-transparent md:hidden z-20" />

               <div className="bg-crick-blue/10 border border-crick-blue/30 text-crick-blue dark:bg-crick-blue/20 dark:border-crick-blue/30 dark:text-crick-blue px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest w-fit md:ml-auto shadow-sm">
                 {match.matchLabel}
               </div>
               <h3 className="text-[15px] md:text-[17px] font-black text-slate-800 dark:text-white uppercase mt-4 tracking-wide">
                 {match.date}
               </h3>
               <div className="flex items-center md:justify-end gap-1.5 text-slate-500 mt-1.5">
                 <Clock size={12} />
                 <span className="text-[10px] md:text-[11px] font-bold tracking-wider">{match.time}</span>
               </div>
            </div>

            {/* Center Timeline Line (Desktop) */}
            <div className="hidden md:flex flex-col items-center relative w-8 shrink-0">
               <div className="absolute top-6 bottom-[-2rem] w-[1px] bg-slate-200 dark:bg-slate-800" />
               <div className="w-2.5 h-2.5 rounded-full border-[2px] border-crick-blue bg-white dark:bg-[#0B1121] absolute top-5 z-10 shadow-[0_0_8px_rgba(197,165,100,0.3)] group-hover:scale-150 transition-all duration-300" />
            </div>

            {/* Right Card */}
            <div className="flex-1 bg-white dark:bg-[#151b29] border border-slate-100 dark:border-slate-800/60 rounded-2xl p-4 md:p-6 shadow-sm hover:border-crick-blue/30 dark:hover:border-slate-600 transition-all cursor-pointer hover:shadow-md ml-6 md:ml-0">
               <div className="flex items-center gap-2 text-slate-400 mb-5 md:mb-6">
                 <MapPin size={12} className="text-crick-blue/70" />
                 <span className="text-[9px] md:text-[10px] uppercase font-black tracking-[0.15em]">{match.venue}</span>
               </div>

               <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
                 
                 {/* Teams vs block */}
                 <div className="flex w-full md:w-auto items-center justify-between md:justify-start gap-1 sm:gap-4 md:gap-8 flex-1 overflow-hidden">
                    {/* Team 1 */}
                    <div className="flex items-center gap-1.5 md:gap-3 flex-1 w-[45%] md:w-auto min-w-0">
                       <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-slate-50 dark:bg-transparent flex items-center justify-center shrink-0">
                         <img src={match.team1.logo} alt="" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                       </div>
                       <span className="font-bold text-[10px] sm:text-[13px] md:text-[14px] text-slate-700 dark:text-slate-200 leading-[1.15] md:leading-tight block shrink min-w-0 break-words line-clamp-3">
                         {match.team1.name}
                       </span>
                    </div>

                    <span className="text-slate-300 dark:text-slate-500 font-black italic text-xs sm:text-base md:text-lg opacity-60 px-0.5 sm:px-1 shrink-0">V/S</span>

                    {/* Team 2 */}
                    <div className="flex items-center gap-1.5 md:gap-3 flex-1 w-[45%] md:w-auto justify-end md:justify-start flex-row-reverse md:flex-row text-right md:text-left min-w-0">
                       <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-slate-50 dark:bg-transparent flex items-center justify-center shrink-0">
                         <img src={match.team2.logo} alt="" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                       </div>
                       <span className="font-bold text-[10px] sm:text-[13px] md:text-[14px] text-slate-700 dark:text-slate-200 leading-[1.15] md:leading-tight block shrink min-w-0 break-words line-clamp-3">
                         {match.team2.name}
                       </span>
                    </div>
                 </div>

                 {/* Match Centre Button */}
                 <button className="w-full md:w-auto mt-2 md:mt-0 bg-crick-blue hover:opacity-90 text-white px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-opacity shrink-0 shadow-sm shadow-crick-blue/20">
                    MATCH CENTRE
                    <ChevronRight size={14} className="opacity-80" />
                 </button>

               </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default IplFixtures;
