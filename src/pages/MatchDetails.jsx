import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Share2, Clock, MapPin, Trophy, Info, ChevronRight, Activity, TrendingUp, Calendar, Zap, Layout } from 'lucide-react';

const SCORECARD_DATA = {
  batting: [
    { name: "Dhrumit Mehta", outInfo: "LBW B RHYS FRANCIS", runs: 11, balls: 8, fours: 2, sixes: 0, sr: 137.5 },
    { name: "Ivan Selemani", outInfo: "B JORDI HENRY", runs: 63, balls: 30, fours: 8, sixes: 3, sr: 210 },
    { name: "Ajith Augustan", outInfo: "LBW B JOEY THOMAS", runs: 63, balls: 36, fours: 5, sixes: 2, sr: 175 },
    { name: "Arun Yadav", outInfo: "B JOEY THOMAS", runs: 46, balls: 29, fours: 4, sixes: 1, sr: 158.62 },
    { name: "Mukesh Suthar", outInfo: "NOT OUT", runs: 28, balls: 14, fours: 2, sixes: 1, sr: 200 },
    { name: "Kassim Nassoro", outInfo: "NOT OUT", runs: 4, balls: 3, fours: 0, sixes: 0, sr: 133.33 },
    { name: "Omary Kitunda", outInfo: "NOT OUT", runs: 0, balls: 0, fours: 0, sixes: 0, sr: 0 },
    { name: "Ally Kimote", outInfo: "NOT OUT", runs: 0, balls: 0, fours: 0, sixes: 0, sr: 0 },
    { name: "Khalidy Juma", outInfo: "NOT OUT", runs: 0, balls: 0, fours: 0, sixes: 0, sr: 0 },
  ],
  bowling: [
    { name: "Rhys Francis", overs: 3, maidens: 0, runs: 33, wickets: 1, economy: 11 },
    { name: "Barry Stroud", overs: 1, maidens: 0, runs: 13, wickets: 0, economy: 13 },
    { name: "Jordan Yon", overs: 3, maidens: 0, runs: 38, wickets: 0, economy: 12.7 },
    { name: "Jordi Henry", overs: 4, maidens: 0, runs: 49, wickets: 1, economy: 12.2 },
    { name: "Aiden Leo", overs: 2, maidens: 0, runs: 28, wickets: 0, economy: 14 },
    { name: "Joey Thomas", overs: 4, maidens: 0, runs: 44, wickets: 2, economy: 11 },
  ]
};

const MatchDetails = () => {
  const { matchId } = useParams();
  const [activeTab, setActiveTab] = React.useState('scorecard');

  const tabs = [
    { id: 'scorecard', label: 'Scorecard' },
    { id: 'commentary', label: 'Commentary' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'gallery', label: 'Gallery' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">
      
      {/* ... Hero Section remains same ... */}
      <div className="bg-white pt-[100px] md:pt-[140px] border-b border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#c5a564]/5 opacity-30 pointer-events-none" />
        
        <div className="crick-container pb-12 relative z-10">
          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* Context Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 group cursor-pointer">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#c5a564]">ICC T20 AFRICA QUALIFIER</span>
                  <ChevronRight size={14} className="text-slate-300" />
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400">T20 MATCH</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  <Clock size={16} className="text-[#c5a564]" />
                  <span>LIVE - 17:30 GMT+5:30</span>
                </div>
                <button className="w-9 h-9 rounded-full bg-slate-50 text-slate-400 border border-slate-100 flex items-center justify-center hover:bg-[#c5a564] hover:text-white transition-all shadow-sm">
                  <Share2 size={16} />
                </button>
              </div>
            </div>

            {/* Main Score Area */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
              
              {/* Team 1 Score */}
              <div className="flex items-center gap-6 md:gap-10 text-center lg:text-left w-full lg:w-auto">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-900 rounded-[2rem] flex items-center justify-center shadow-xl border-4 border-white overflow-hidden relative group shrink-0 mx-auto lg:mx-0">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#c5a564]/30 to-transparent" />
                   <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png" alt="" className="w-[80%] h-[80%] object-contain group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                   <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">RCB</h2>
                   <div className="flex items-baseline gap-3 justify-center lg:justify-start">
                      <span className="text-5xl md:text-6xl font-black text-slate-800">236-4</span>
                      <span className="text-sm md:text-base font-bold text-slate-400 italic">(19.6 OV)</span>
                   </div>
                </div>
              </div>

              {/* Central Scoreboard Display */}
              <div className="flex flex-col items-center justify-center gap-4 bg-slate-900/5 px-8 md:px-12 py-8 rounded-[3rem] border border-slate-100 shadow-inner relative overflow-hidden min-w-[300px]">
                 <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a564]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c5a564]">NEED 14 RUNS IN 2 BALLS</span>
                 <div className="flex items-center gap-10">
                    <div className="flex flex-col items-center">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">CRR</span>
                       <span className="text-2xl font-black text-slate-800 tracking-tighter">11.83</span>
                    </div>
                    <div className="w-[1px] h-8 bg-slate-200" />
                    <div className="flex flex-col items-center">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">RRR</span>
                       <span className="text-2xl font-black text-[#c5a564] tracking-tighter">42.0</span>
                    </div>
                 </div>
              </div>

              {/* Team 2 Score */}
              <div className="flex flex-row-reverse items-center gap-6 md:gap-10 text-center lg:text-right w-full lg:w-auto">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#c5a564] rounded-[2rem] flex items-center justify-center shadow-xl border-4 border-white overflow-hidden relative group shrink-0 mx-auto lg:mx-0">
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent" />
                   <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png" alt="" className="w-[85%] h-[85%] object-contain group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                   <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">SRH</h2>
                   <div className="flex flex-col items-center lg:items-end">
                      <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#c5a564] bg-[#c5a564]/5 px-5 py-2 rounded-full border border-[#c5a564]/10 shadow-sm">YET TO BAT</span>
                   </div>
                </div>
              </div>

            </div>

            {/* Status & Metadata Bar */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
               <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-slate-900 text-white shadow-xl shadow-slate-900/10">
                  <div className="w-2 h-2 rounded-full bg-[#c5a564] animate-pulse" />
                  <span className="text-[11px] font-black uppercase tracking-[0.3em]">INNINGS BREAK</span>
               </div>
               
               <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  <div className="flex items-center gap-3">
                     <Calendar size={18} className="text-[#c5a564]" />
                     <span>MAR 28, 3:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <MapPin size={18} className="text-[#c5a564]" />
                     <span>ACCRA STADIUM</span>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow pb-24">
         <div className="crick-container py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Section: Scorecard Tables */}
            <div className="lg:col-span-8 flex flex-col gap-8">
               
               {/* Controls Bar */}
               <div className="flex flex-wrap gap-4 sticky top-[80px] z-20 md:top-[120px] bg-slate-50/80 backdrop-blur-md py-4 rounded-3xl -mx-4 px-4 overflow-x-auto scrollbar-hide">
                  {tabs.map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`${
                        activeTab === tab.id 
                        ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10" 
                        : "bg-white text-slate-500 border border-slate-100 hover:border-[#c5a564] hover:text-[#c5a564]"
                      } px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs shadow-sm transition-all whitespace-nowrap`}
                    >
                      {tab.label}
                    </button>
                  ))}
               </div>

               {activeTab === 'scorecard' ? (
                  <>
                     {/* Inning Container */}
                     <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40">
                        <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-50 bg-slate-50/40">
                           <div className="flex items-center gap-5">
                              <div className="w-2.5 h-10 bg-[#c5a564] rounded-full" />
                              <div className="flex flex-col gap-1">
                                 <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900">TANZANIA</h3>
                                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">First Inning Batting</span>
                              </div>
                           </div>
                           <div className="flex items-baseline gap-3">
                              <span className="text-4xl md:text-5xl font-black text-slate-900">236/4</span>
                              <span className="text-slate-400 font-black uppercase text-sm italic">(20.0 OV)</span>
                           </div>
                        </div>

                        <div className="overflow-x-auto scrollbar-hide">
                           <table className="w-full text-left">
                              <thead>
                                 <tr className="bg-slate-50/50 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 border-b border-slate-50">
                                    <th className="px-8 md:px-12 py-6">Batter Insight</th>
                                    <th className="px-6 py-6 text-center">Runs</th>
                                    <th className="px-6 py-6 text-center">Balls</th>
                                    <th className="px-6 py-6 text-center">4s</th>
                                    <th className="px-6 py-6 text-center">6s</th>
                                    <th className="px-10 md:px-12 py-6 text-right">SR</th>
                                 </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-50">
                                 {SCORECARD_DATA.batting.map((player, i) => (
                                   <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                      <td className="px-8 md:px-12 py-7">
                                         <div className="flex flex-col gap-2">
                                            <span className="text-base md:text-lg font-black text-slate-800 group-hover:text-[#c5a564] transition-colors cursor-pointer leading-tight uppercase tracking-tight">{player.name}</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] flex items-center gap-2">
                                               <Zap size={12} className="text-[#c5a564]/50" />
                                               {player.outInfo}
                                            </span>
                                         </div>
                                      </td>
                                      <td className="px-6 py-7 text-center font-black text-xl text-slate-900">{player.runs}</td>
                                      <td className="px-6 py-7 text-center text-slate-400 text-[15px] font-bold">{player.balls}</td>
                                      <td className="px-6 py-7 text-center text-slate-400 text-[15px] font-bold">{player.fours}</td>
                                      <td className="px-6 py-7 text-center text-slate-400 text-[15px] font-bold">{player.sixes}</td>
                                      <td className="px-10 md:px-12 py-7 text-right font-black text-[#c5a564] text-lg italic">{player.sr}</td>
                                   </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>

                        {/* Summary Totals Row */}
                        <div className="p-10 md:p-12 bg-slate-900 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a564]/10 blur-3xl rounded-full" />
                           <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-10">
                              <div className="flex flex-col gap-1 text-center md:text-left">
                                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a564]">TOTAL EXTRAS</span>
                                 <div className="flex items-center gap-4">
                                    <span className="text-4xl font-black">21</span>
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">(B 5, LB 8, W 8, NB 0)</span>
                                 </div>
                              </div>
                           </div>
                           <div className="px-10 py-6 rounded-[2rem] bg-white/5 border border-white/10 flex items-center gap-10 relative z-10">
                              <div className="flex flex-col gap-1 items-center md:items-end">
                                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a564]">FINAL TOTAL</span>
                                 <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-black">236/4</span>
                                    <span className="text-white/30 font-black text-lg italic">(20.0 OV)</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Bowling Container */}
                     <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40">
                        <div className="p-8 md:p-10 flex items-center gap-5 bg-slate-50/40 border-b border-slate-50">
                           <div className="w-2.5 h-10 bg-slate-800 rounded-full" />
                           <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900">Bowling Bulletin</h3>
                        </div>
                        <div className="overflow-x-auto scrollbar-hide">
                           <table className="w-full text-left">
                              <thead>
                                 <tr className="bg-slate-50/50 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 border-b border-slate-50">
                                    <th className="px-8 md:px-12 py-6">Bowler Delivery</th>
                                    <th className="px-6 py-6 text-center">O</th>
                                    <th className="px-6 py-6 text-center">M</th>
                                    <th className="px-6 py-6 text-center">R</th>
                                    <th className="px-6 py-6 text-center">W</th>
                                    <th className="px-10 md:px-12 py-6 text-right">ECO</th>
                                 </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-50">
                                 {SCORECARD_DATA.bowling.map((bowler, i) => (
                                   <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                      <td className="px-8 md:px-12 py-6">
                                         <span className="text-base md:text-lg font-black text-slate-800 group-hover:text-[#c5a564] transition-colors cursor-pointer uppercase tracking-tight">{bowler.name}</span>
                                      </td>
                                      <td className="px-6 py-6 text-center font-black text-lg text-slate-900">{bowler.overs}</td>
                                      <td className="px-6 py-6 text-center text-slate-400 text-sm font-bold">{bowler.maidens}</td>
                                      <td className="px-6 py-6 text-center text-slate-400 text-sm font-bold">{bowler.runs}</td>
                                      <td className="px-6 py-6 text-center font-black text-lg text-[#c5a564]">{bowler.wickets}</td>
                                      <td className="px-10 md:px-12 py-6 text-right font-black text-slate-800 italic">{bowler.economy}</td>
                                   </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </>
               ) : (
                  <div className="bg-white rounded-[2.5rem] p-16 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col items-center justify-center text-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                     <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-[#c5a564] border border-slate-100 shadow-sm">
                        <Info size={32} />
                     </div>
                     <div className="flex flex-col gap-3">
                        <h4 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                           {activeTab} Content Coming Soon
                        </h4>
                        <p className="text-base font-medium text-slate-500 max-w-sm mx-auto leading-relaxed">
                           We are currently preparing the {activeTab} section for this match. Stay tuned for real-time updates and exclusive insights!
                        </p>
                     </div>
                     <button 
                        onClick={() => setActiveTab('scorecard')}
                        className="mt-4 px-8 py-3 rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest text-xs hover:bg-[#c5a564] transition-all"
                     >
                        Back to Scorecard
                     </button>
                  </div>
               )}
            </div>

            {/* Right Section: Match Intel & News */}
            <div className="lg:col-span-4 flex flex-col gap-10">
               
               {/* Match Intelligence Board */}
               <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a564]/5 blur-3xl pointer-events-none group-hover:bg-[#c5a564]/10 transition-colors" />
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-10 h-10 rounded-2xl bg-slate-900 flex items-center justify-center text-[#c5a564] shadow-lg shadow-slate-900/20">
                        <Layout size={20} />
                     </div>
                     <span className="text-sm font-black uppercase tracking-[0.25em] text-slate-900">Intelligence Board</span>
                  </div>
                  
                  <div className="flex flex-col gap-8">
                     {[
                       { label: "SERIES CONTEXT", value: "ICC T20 WC Africa Regional Qualifier B", icon: <Trophy size={18} /> },
                       { label: "VENUE INSIGHT", value: "Accra Multi-purpose Stadium", icon: <MapPin size={18} /> },
                       { label: "MATCH TYPE", value: "International T20", icon: <Activity size={18} /> },
                       { label: "LOCAL TIME", value: "17:30 IST (Actual)", icon: <Clock size={16} /> }
                     ].map((item, i) => (
                       <div key={i} className="flex flex-col gap-2.5 pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.label}</span>
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#c5a564] border border-slate-100">{item.icon}</div>
                             <span className="text-[13px] font-bold text-slate-700 leading-relaxed">{item.value}</span>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Trending Bulletins */}
               <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40">
                  <div className="flex items-center justify-between mb-10">
                     <div className="flex items-center gap-4">
                        <div className="w-1.5 h-6 bg-[#c5a564] rounded-full" />
                        <span className="text-sm font-black uppercase tracking-[0.25em] text-slate-900">Bulletins</span>
                     </div>
                     <Link to="/news" className="text-[10px] font-black uppercase tracking-widest text-[#c5a564] hover:underline">View All</Link>
                  </div>
                  
                  <div className="flex flex-col gap-8">
                     {[
                       { title: "Second season will test them mentally' - Shashank on Sooryavanshi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfI6H2i-0N-uC0uO-Y7I8gY-y-I8-w-0-y-w&s", time: "2H AGO" },
                       { title: "IPL Pulse: Billion-dollar teams, broken bowlers, flowing hair", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfI6H2i-0N-uC0uO-Y7I8gY-y-I8-w-0-y-w&s", time: "5H AGO" }
                     ].map((news, i) => (
                       <div key={i} className="flex gap-6 items-start group cursor-pointer">
                          <div className="w-24 h-24 rounded-3xl overflow-hidden border border-slate-100 shadow-sm shrink-0">
                             <img src={news.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="flex flex-col gap-3">
                             <div className="flex items-center gap-2 text-[9px] font-black text-[#c5a564] uppercase tracking-widest">
                                <Zap size={12} />
                                <span>{news.time}</span>
                             </div>
                             <h4 className="text-[13px] font-bold text-slate-800 group-hover:text-[#c5a564] transition-colors leading-snug line-clamp-3">
                                {news.title}
                             </h4>
                          </div>
                       </div>
                     ))}
                  </div>
                  <button className="w-full mt-10 py-4 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#c5a564] shadow-lg shadow-slate-900/10 transition-all transform hover:-translate-y-1">
                     GLOBAL ARCHIVE
                  </button>
               </div>

            </div>

         </div>
      </main>

    </div>
  );
};

export default MatchDetails;
