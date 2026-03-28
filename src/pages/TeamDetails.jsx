import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Trophy, User } from 'lucide-react';

const TEAM_DATA = {
  'csk': { id: 'csk', name: 'Chennai Super Kings', abbr: 'CSK', gradient: 'from-[#FACC15] to-[#F59E0B]' },
  'dc': { id: 'dc', name: 'Delhi Capitals', abbr: 'DC', gradient: 'from-[#0284C7] to-[#B91C1C]' },
  'gt': { id: 'gt', name: 'Gujarat Titans', abbr: 'GT', gradient: 'from-[#1E3A8A] to-[#172554]' },
  'rcb': { id: 'rcb', name: 'Royal Challengers Bengaluru', abbr: 'RCB', gradient: 'from-[#DC2626] to-[#000000]' },
  'pbks': { id: 'pbks', name: 'Punjab Kings', abbr: 'PBKS', gradient: 'from-[#EF4444] to-[#991B1B]' },
  'kkr': { id: 'kkr', name: 'Kolkata Knight Riders', abbr: 'KKR', gradient: 'from-[#3B0764] to-[#000000]' },
  'srh': { id: 'srh', name: 'Sunrisers Hyderabad', abbr: 'SRH', gradient: 'from-[#F97316] to-[#C2410C]' },
  'rr': { id: 'rr', name: 'Rajasthan Royals', abbr: 'RR', gradient: 'from-[#DB2777] to-[#1D4ED8]' },
  'mi': { id: 'mi', name: 'Mumbai Indians', abbr: 'MI', gradient: 'from-[#2563EB] to-[#1E3A8A]' },
  'lsg': { id: 'lsg', name: 'Lucknow Super Giants', abbr: 'LSG', gradient: 'from-[#06B6D4] to-[#1D4ED8]' },
};

const TEAM_PLAYERS = {
  'csk': [
    { id: 1, name: 'Ruturaj Gaikwad', role: 'Batsman', isCaptain: true, icon: '🏏' },
    { id: 2, name: 'Dewald Brevis', role: 'Batsman', icon: '🏏' },
    { id: 3, name: 'Ayush Mhatre', role: 'Batsman', icon: '🏏' },
    { id: 4, name: 'Matthew Short', role: 'Batsman', icon: '🏏' },
    { id: 5, name: 'Sarfaraz Khan', role: 'Batsman', icon: '🏏' },
    { id: 6, name: 'Shivam Dube', role: 'Batting Allrounder', icon: '🏏🎾' },
    { id: 7, name: 'Ramakrishna Ghosh', role: 'Bowler', icon: '🎾' },
    { id: 8, name: 'Jamie Overton', role: 'Bowling Allrounder', icon: '🏏🎾' },
    { id: 9, name: 'Anshul Kamboj', role: 'Bowler', icon: '🎾' },
  ]
};

// Generic mock generator for other teams
const generateMockPlayers = () => {
  return Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Player ${i + 1}`,
    role: i < 5 ? 'Batsman' : i < 8 ? 'Allrounder' : 'Bowler',
    icon: i < 5 ? '🏏' : i < 8 ? '🏏🎾' : '🎾',
    isCaptain: i === 0,
  }));
};

const TeamDetails = () => {
  const { teamId } = useParams();
  const team = TEAM_DATA[teamId?.toLowerCase()];

  if (!team) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-800">Team Not Found</h1>
        <Link to="/teams" className="mt-4 text-[#c5a564] hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Teams
        </Link>
      </div>
    );
  }

  const players = TEAM_PLAYERS[team.id] || generateMockPlayers();

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
      <div className="pt-[72px] md:pt-[84px]">
        {/* Banner Section - Premium White Theme */}
        <div className="w-full bg-white border-b border-slate-200 relative shadow-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent to-[#c5a564]/5 pointer-events-none" />
          
          <div className="crick-container py-10 md:py-16 relative z-10">
            <Link to="/teams" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#c5a564] text-sm font-bold uppercase tracking-wider mb-8 transition-colors">
              <ArrowLeft size={16} /> All Teams
            </Link>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10">
              {/* Team Logo Container */}
              <div className={`w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-[2rem] bg-gradient-to-br ${team.gradient} p-[4px] shadow-lg shadow-[#c5a564]/10`}>
                <div className="w-full h-full bg-white rounded-[1.8rem] flex items-center justify-center">
                  <span className={`text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-500`}>
                    {team.abbr}
                  </span>
                </div>
              </div>

              {/* Team Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-[#c5a564] font-bold tracking-widest text-xs md:text-sm uppercase mb-3">
                  <Trophy size={16} className="text-[#c5a564]" />
                  <span>IPL 2026 Series</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-3 uppercase tracking-tighter">
                  {team.name.replace(/ /g, '-')}
                </h1>
                <p className="text-slate-500 text-sm md:text-base font-bold uppercase tracking-widest">
                  Official Squad Selection & Player List
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Players Grid Section */}
        <div className="crick-container py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player) => (
              <Link
                to={`/player/${player.id}`}
                key={player.id}
                className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-5 group hover:border-[#c5a564]/50 hover:shadow-xl hover:shadow-[#c5a564]/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                {/* Player Avatar */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${team.gradient} p-[2px]`}>
                    <div className="w-full h-full bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 overflow-hidden">
                       <User size={32} strokeWidth={1.5} className="mt-2" />
                    </div>
                  </div>
                  {/* Icon Overlay */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-slate-900 text-white text-xs border-[3px] border-white rounded-full flex items-center justify-center shadow-sm">
                    {player.icon || '🏏'}
                  </div>
                </div>

                {/* Player Info */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <h3 className="text-slate-800 font-black uppercase text-sm md:text-base group-hover:text-[#c5a564] transition-colors leading-tight">
                      {player.name}
                    </h3>
                    {player.isCaptain && (
                      <span className="w-5 h-5 bg-slate-800 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm">
                        C
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-[11px] md:text-xs font-bold uppercase tracking-widest mt-1">
                    {player.role}
                  </p>
                </div>

                {/* Action Arrow */}
                <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-[#c5a564] group-hover:text-white transition-all transform group-hover:scale-110">
                  <ChevronRight size={16} strokeWidth={3} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
