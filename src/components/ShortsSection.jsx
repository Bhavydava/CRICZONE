import React, { useRef } from 'react';
import { Video, ChevronRight, ChevronLeft } from 'lucide-react';

/* 
  DATA SECTION: Edit your shorts details here.
*/
const SHORTS_DATA = [
  { id: 1, title: "Daily Cricket Blast!", image: "https://picsum.photos/seed/short1/200/400" },
  { id: 2, title: "Top 5 Catches!", image: "https://picsum.photos/seed/short2/200/400" },
  { id: 3, title: "Daily Cricket Blast!", image: "https://picsum.photos/seed/short1/200/400" },
];

/* 
  CARD DESIGN: Defined once here. 
  It takes 'short' data as a prop and renders it.
*/


const ShortsSection = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="crick-container flex flex-col gap-6 py-8 relative z-10">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div className="flex items-center gap-3 group cursor-pointer">
           <div className="p-2 bg-crick-blue/10 rounded-xl group-hover:bg-crick-blue/20 transition-all duration-300">
             <Video className="text-crick-blue" size={22} />
           </div>
           <h2 className="text-xl font-black text-slate-800 uppercase tracking-[0.2em] italic flex items-center">
             Shorts
           </h2>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:text-crick-blue hover:border-crick-blue/30 transition-all active:scale-95 shadow-sm">
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:text-crick-blue hover:border-crick-blue/30 transition-all active:scale-95 shadow-sm">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex flex-nowrap gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
        {/* AUTOMATIC CARDS: They come from the 'SHORTS_DATA' list above */}
        {SHORTS_DATA.map((data) => (
          <ShortCard key={data.id} short={data} />
        ))}
      </div>
    </div>
  );
};

const ShortCard = ({ short }) => {
  return (
    <div className="flex-none w-[160px] md:w-[180px] h-[260px] md:h-[300px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 hover:border-crick-blue transition-all cursor-pointer group shadow-sm relative">
      <img src={short.image} alt={short.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-90" />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 z-20">
         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-crick-blue shadow-xl">
            <Video size={20} className="fill-current" />
         </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 z-10">
        <span className="text-[10px] font-black text-white line-clamp-2 uppercase italic tracking-tighter drop-shadow-md">
           {short.title}
        </span>
      </div>
    </div>
  );
};


export default ShortsSection;
