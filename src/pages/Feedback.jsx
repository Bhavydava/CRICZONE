import React, { useState } from 'react';
import { Star, ThumbsUp, MessageCircle, Heart, Send, CheckCircle2 } from 'lucide-react';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col pt-[100px]">
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-slate-200/50 border border-slate-100 max-w-2xl w-full text-center flex flex-col items-center animate-in fade-in zoom-in duration-500">
             <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 border border-green-100">
                <CheckCircle2 size={48} />
             </div>
             <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">Thank You!</h2>
             <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Your feedback has been received. We appreciate you taking the time to help us improve CricZone.
             </p>
             <button 
               onClick={() => window.location.href = '/'}
               className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#c5a564] transition-all"
             >
                Back to Home
             </button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">

      <main className="flex-grow pt-[100px] md:pt-[140px] pb-20">
        <div className="crick-container max-w-4xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#c5a564]/20 shadow-sm text-[#c5a564] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Heart size={16} strokeWidth={2.5} className="fill-current" />
              <span>We Value Your Opinion</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-4">
              <span className="text-slate-900">Your </span>
              <span className="text-[#c5a564]">Feedback</span>
            </h1>
            <p className="text-slate-500 max-w-xl text-lg">
              Help us build the ultimate cricket experience. Share your thoughts, suggestions, or report any issues you've encountered.
            </p>
          </div>

          {/* Feedback Form Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#c5a564] to-transparent" />
             
             <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                
                {/* Rating Section */}
                <div className="flex flex-col items-center gap-4">
                   <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Rate your experience</h3>
                   <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`p-2 transition-all transform hover:scale-110 ${star <= (hover || rating) ? 'text-yellow-400' : 'text-slate-200'}`}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                        >
                          <Star size={44} fill={star <= (hover || rating) ? "currentColor" : "none"} strokeWidth={1.5} />
                        </button>
                      ))}
                   </div>
                   {rating > 0 && (
                     <p className="text-[#c5a564] font-black uppercase text-[10px] tracking-widest animate-pulse">
                        {rating === 5 ? "Excellent!" : rating === 4 ? "Very Good" : rating === 3 ? "Good" : rating === 2 ? "Below Average" : "Needs Improvement"}
                     </p>
                   )}
                </div>

                {/* Category Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">What is this regarding?</label>
                      <select className="bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white transition-all text-slate-800 font-bold appearance-none cursor-pointer">
                         <option>General Feedback</option>
                         <option>Bug Report</option>
                         <option>Feature Request</option>
                         <option>Content Accuracy</option>
                         <option>Advertising Inquiry</option>
                      </select>
                   </div>
                   <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Your Email (Optional)</label>
                      <input 
                        type="email" 
                        placeholder="email@example.com"
                        className="bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white transition-all text-slate-800 font-bold"
                      />
                   </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3">
                   <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Tell us more</label>
                   <textarea 
                     rows="6"
                     placeholder="Your suggestions or details about the issue..."
                     className="bg-slate-50 border border-slate-100 p-6 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white transition-all text-slate-800 font-bold resize-none"
                     required
                   ></textarea>
                </div>

                {/* Submit */}
                <div className="flex flex-col items-center gap-6">
                   <button 
                     type="submit"
                     className="group relative bg-[#c5a564] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center gap-4 overflow-hidden shadow-xl shadow-[#c5a564]/30 hover:shadow-2xl active:scale-95"
                   >
                      <span>Submit Feedback</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                   <div className="flex items-center gap-2 text-slate-400 italic text-xs">
                      <ThumbsUp size={14} />
                      <span>Thank you for helping us grow!</span>
                   </div>
                </div>

             </form>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Feedback;
