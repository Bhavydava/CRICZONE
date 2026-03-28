import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Trophy, ChevronRight } from 'lucide-react';

const IPL_TEAMS = [
  { id: 'csk', name: 'Chennai Super Kings', abbr: 'CSK', gradient: 'from-[#FACC15] to-[#F59E0B]' },
  { id: 'dc', name: 'Delhi Capitals', abbr: 'DC', gradient: 'from-[#0284C7] to-[#B91C1C]' },
  { id: 'gt', name: 'Gujarat Titans', abbr: 'GT', gradient: 'from-[#1E3A8A] to-[#172554]' },
  { id: 'rcb', name: 'Royal Challengers Bengaluru', abbr: 'RCB', gradient: 'from-[#DC2626] to-[#000000]' },
  { id: 'pbks', name: 'Punjab Kings', abbr: 'PBKS', gradient: 'from-[#EF4444] to-[#991B1B]' },
  { id: 'kkr', name: 'Kolkata Knight Riders', abbr: 'KKR', gradient: 'from-[#3B0764] to-[#000000]' },
  { id: 'srh', name: 'Sunrisers Hyderabad', abbr: 'SRH', gradient: 'from-[#F97316] to-[#C2410C]' },
  { id: 'rr', name: 'Rajasthan Royals', abbr: 'RR', gradient: 'from-[#DB2777] to-[#1D4ED8]' },
  { id: 'mi', name: 'Mumbai Indians', abbr: 'MI', gradient: 'from-[#2563EB] to-[#1E3A8A]' },
  { id: 'lsg', name: 'Lucknow Super Giants', abbr: 'LSG', gradient: 'from-[#06B6D4] to-[#1D4ED8]' },
];

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeams = IPL_TEAMS.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.abbr.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
      <div className="pt-[72px] md:pt-[84px]">
        
        {/* Banner Section */}
        <div className="w-full bg-white border-b border-slate-200 relative overflow-hidden shadow-sm">
          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent to-[#c5a564]/5 pointer-events-none" />
          
          <div className="crick-container py-12 md:py-16 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-2 text-[#c5a564] font-bold tracking-widest text-sm uppercase mb-3">
                <Trophy size={16} />
                <span>IPL 2026 Series</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                IPL Teams
              </h1>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Explore all the participating teams in the Indian Premier League 2026. Click on a team to view their full squad and details.
              </p>
            </div>

            <div className="w-full md:w-[350px]">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search size={18} className="text-slate-400 group-hover:text-[#c5a564] transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search your team..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:bg-white focus:border-[#c5a564] focus:ring-1 focus:ring-[#c5a564] transition-all placeholder-slate-400 shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Teams Grid Section */}
        <div className="crick-container py-12 md:py-20">
          {filteredTeams.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredTeams.map((team) => (
                <Link
                  to={`/teams/${team.id}`}
                  key={team.id}
                  className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#c5a564]/30 hover:shadow-xl hover:shadow-[#c5a564]/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-24 h-24 md:w-28 md:h-28 rounded-[1.5rem] bg-gradient-to-br ${team.gradient} p-[3px] mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                    <div className="w-full h-full bg-white rounded-[1.3rem] flex items-center justify-center">
                      <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-500 group-hover:from-slate-900 group-hover:to-slate-700">
                        {team.abbr}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-lg md:text-xl font-black uppercase tracking-wide text-slate-800 group-hover:text-[#c5a564] transition-colors leading-tight">
                    {team.name}
                  </h2>
                  
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c5a564] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    View Squad <ChevronRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="w-full py-20 flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <Search size={32} className="text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No teams found</h3>
              <p className="text-slate-500">We couldn't find any team matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teams;
