import React from 'react';
import { UserPlus, Mail, Lock, User, ArrowRight, Chrome, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col">

      <main className="flex-grow flex items-center justify-center pt-[100px] md:pt-[140px] pb-20 px-4">
        <div className="max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
           
           {/* Signup Card */}
           <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#c5a564] rounded-full" />
              
              <div className="flex flex-col items-center text-center mb-10">
                 <div className="w-16 h-16 bg-slate-50 text-[#c5a564] rounded-2xl flex items-center justify-center mb-6">
                    <UserPlus size={32} />
                 </div>
                 <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900">Create Account</h1>
                 <p className="text-slate-400 text-sm mt-2">Join the world's most premium cricket community</p>
              </div>

              <form className="flex flex-col gap-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <div className="relative group">
                       <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#c5a564] transition-colors" />
                       <input 
                         type="text" 
                         placeholder="John Doe"
                         className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white text-slate-800 font-bold transition-all"
                       />
                    </div>
                 </div>

                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <div className="relative group">
                       <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#c5a564] transition-colors" />
                       <input 
                         type="email" 
                         placeholder="name@example.com"
                         className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white text-slate-800 font-bold transition-all"
                       />
                    </div>
                 </div>

                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                    <div className="relative group">
                       <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#c5a564] transition-colors" />
                       <input 
                         type="password" 
                         placeholder="••••••••"
                         className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c5a564]/20 focus:bg-white text-slate-800 font-bold transition-all"
                       />
                    </div>
                 </div>

                 <button className="group relative w-full bg-[#c5a564] text-white p-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-900 active:scale-[0.98] transition-all flex items-center justify-center gap-3 overflow-hidden shadow-xl shadow-[#c5a564]/20">
                    <span className="relative z-10 transition-transform group-hover:translate-x-1">Create Account</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                 </button>
              </form>

              <div className="mt-8 flex items-center gap-4">
                 <div className="h-px bg-slate-100 flex-1" />
                 <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Or Sign Up With</span>
                 <div className="h-px bg-slate-100 flex-1" />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                 <button className="flex items-center justify-center gap-3 p-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-colors group">
                    <Chrome size={20} className="text-red-500" />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-600">Google</span>
                 </button>
                 <button className="flex items-center justify-center gap-3 p-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-colors group">
                    <Github size={20} className="text-slate-900" />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-600">Github</span>
                 </button>
              </div>
           </div>

           <p className="text-center mt-10 text-slate-400 text-sm font-medium">
              Already have an account? <Link to="/login" className="text-[#c5a564] font-black uppercase tracking-widest text-xs hover:underline ml-1">Log In</Link>
           </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
