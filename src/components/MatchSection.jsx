import React from 'react';
import { ChevronRight } from 'lucide-react';

/* 
  DATA SECTION: Edit your match details here.
*/
const MATCHES_DATA = [
  {
     status: "Upcoming - 1st T20I",
     series: "India Tour of New Zealand 2026",
     teamA: { name: "India", logo: "https://flagcdn.com/w160/in.png", score: "", overs: "" },
     teamB: { name: "New Zealand", logo: "https://flagcdn.com/w160/nz.png", score: "", overs: "" },
     date: "28 Mar 2026, 2:30 PM",
     venue: "Wellington"
  }
];

const CATEGORIES = ["ALL MATCHES (9)"];

const MatchCard = ({ match }) => {
  return (
    <div className="flex-none w-[340px] md:w-[360px] bg-white border border-slate-100 rounded-xl p-5 hover:border-crick-blue/30 transition-all group cursor-pointer shadow-sm hover:shadow-md">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{match.status}</span>
             <span className="text-[11px] font-bold text-slate-500">{match.series}</span>
          </div>
          <div className="flex gap-2">
            <button className="text-[9px] font-black px-2 py-0.5 border border-slate-100 rounded hover:bg-slate-50 transition-colors uppercase text-slate-400">FIXTURES</button>
            <button className="text-[9px] font-black px-2 py-0.5 border border-slate-100 rounded hover:bg-slate-50 transition-colors uppercase text-slate-400">STANDINGS</button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {[match.teamA, match.teamB].map((team, j) => (
            <div key={j} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-100 shadow-sm shrink-0">
                  <img src={team.logo} alt={team.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-sm text-[#0f172a]">{team.name}</span>
              </div>
              <span className="font-black text-lg text-[#0f172a]/50">{team.score || "50/2"}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[10px] font-bold text-[#0f172a]/50 border-t border-slate-50 pt-4">
          <span>{match.date}</span>
          <button className="text-crick-blue font-black tracking-widest uppercase hover:opacity-80 transition-all">FANTASY TIPS</button>
        </div>
      </div>
    </div>
  );
};

const MatchSection = () => {
  return (
    <div className="crick-container flex flex-col gap-6 pt-6 md:pt-10 relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col gap-1.5 px-4 md:px-0">
        <h2 className="text-3xl md:text-[2.25rem] font-black text-[#0f172a] dark:text-white tracking-tight">Match Fixtures</h2>
        <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#0f172a]/40 dark:text-slate-500 max-w-xl">
          The most anticipated upcoming global fixtures dynamically loaded
        </p>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2 px-4 md:px-0">
        {CATEGORIES.map((cat, i) => (
          <button
            key={i}
            className={`px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase transition-all whitespace-nowrap ${
              i === 0 
                ? "bg-crick-blue text-white shadow-md shadow-crick-blue/20" 
                : "text-slate-500 hover:text-crick-blue hover:bg-slate-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-nowrap gap-4 overflow-x-auto scrollbar-hide pb-4">
         {MATCHES_DATA.map((m, i) => <MatchCard key={i} match={m} />)}
      </div>
    </div>
  );
};

export default MatchSection;
