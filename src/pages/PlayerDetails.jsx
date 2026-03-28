import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Calendar, MapPin, Activity } from 'lucide-react';

const PLAYER_DATA = {
  '1': {
    id: '1',
    name: 'Ruturaj Gaikwad',
    fullName: 'Ruturaj Dashrat Gaikwad',
    role: 'Batsman',
    country: 'India',
    battingStyle: 'Right Handed Bat',
    bowlingStyle: 'Right-Arm Offbreak',
    born: 'January 31, 1997',
    birthplace: 'Pune, Maharashtra',
    bio: 'A free-stroking opener whose game revolves around a fluid technique, Ruturaj Gaikwad first burst into the scene during the 2016-17 Vijay Hazare Trophy where he ended as the third highest run-scorer in the tournament. His ability to be solid and play risk-free cricket, and yet score at a fair clip caught attention immediately. Right from his childhood days, Ruturaj was a prodigy who was tipped for great things and has established himself as a reliable anchor and aggressive closer in T20 cricket.',
    initials: 'RG'
  }
};

const getPlayer = (id) => {
  return PLAYER_DATA[id] || {
    id: id,
    name: `Player ${id}`,
    fullName: `Official Player ${id}`,
    role: 'Batsman',
    country: 'India',
    battingStyle: 'Right Handed Bat',
    bowlingStyle: 'Right-Arm Medium',
    born: 'January 1, 1990',
    birthplace: 'Unknown Location',
    bio: "Biography details for this player are currently being updated by the team's management. Please check back later for full career statistics, personal information, and professional journey details.",
    initials: `P${id}`
  };
};

const PlayerDetails = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const player = getPlayer(playerId);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">

      <div className="pt-[72px] md:pt-[84px]">
        {/* Banner Section - Premium White Theme */}
        <div className="w-full bg-white border-b border-slate-200 relative shadow-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#c5a564]/5 to-transparent pointer-events-none" />
          
          <div className="crick-container py-12 md:py-20 relative z-10">
            <button 
              onClick={() => navigate(-1)} 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-[#c5a564] text-sm font-bold uppercase tracking-wider mb-8 transition-colors"
            >
              <ArrowLeft size={16} /> Back
            </button>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16">
              
              {/* Player Image / Avatar */}
              <div className="relative shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-slate-100 border-[8px] border-slate-50 flex items-center justify-center shadow-lg overflow-hidden group">
                  {/* Using a nice gradient/initials placeholder for premium feel */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                    <User size={80} strokeWidth={1} className="text-slate-500/50" />
                  </div>
                </div>
                {/* Country Pill */}
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-blue-700 text-white rounded-full px-5 py-1.5 text-xs font-black uppercase tracking-widest shadow-md border-2 border-white">
                  {player.country}
                </div>
              </div>

              {/* Player Details Header */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-4 mb-4">
                  <div className="px-3 py-1 bg-[#0f172a] text-[#c5a564] text-xs font-black uppercase tracking-widest rounded shadow-sm">
                    {player.role}
                  </div>
                  <span className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase">
                    "{player.fullName}"
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-slate-900 uppercase tracking-tighter leading-none mb-6">
                  {player.name}
                </h1>
                
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6 text-slate-500 text-xs md:text-sm font-bold tracking-widest uppercase">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-[#c5a564]" />
                    <span>{player.battingStyle}</span>
                  </div>
                  <span className="hidden sm:inline-block text-slate-300">•</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#c5a564]" />
                    <span>{player.bowlingStyle}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="crick-container py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Personal Info Box (1 Column) */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-8">
                <User size={20} className="text-[#c5a564]" strokeWidth={2.5} />
                <h2 className="text-lg font-black uppercase tracking-widest text-[#0f172a]">
                  Personal Info
                </h2>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start pb-6 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 text-slate-400">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Born</div>
                    <div className="text-sm font-bold text-slate-800">{player.born}</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 text-slate-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Birthplace</div>
                    <div className="text-sm font-bold text-slate-800 leading-snug">{player.birthplace}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Box (2 Columns) */}
            <div className="lg:col-span-2 bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-black uppercase tracking-widest text-[#0f172a] mb-8">
                Biography
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-500 leading-loose text-sm md:text-base">
                  {player.bio}
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
