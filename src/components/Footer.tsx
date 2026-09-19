import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto relative bg-kit-navy-dark pt-16 no-print font-sans">
      
      {/* ── Floating Contact Bar ── */}
      <div className="absolute left-0 right-0 -top-8 px-5 max-w-5xl mx-auto z-10">
        <div className="bg-gradient-to-r from-kit-navy to-[#004080] rounded-2xl shadow-kit-lg p-5 flex flex-col md:flex-row justify-around items-center text-white border-2 border-kit-gold gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-full"><Phone size={20} className="text-kit-gold"/></div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-kit-gold font-bold">Call Us</p>
              <p className="text-sm font-semibold">0422 - 236645, 236625</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20"></div>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-full"><Mail size={20} className="text-kit-gold"/></div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-kit-gold font-bold">Email Us</p>
              <p className="text-sm font-semibold">coe@kit.edu.in</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20"></div>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-full"><MapPin size={20} className="text-kit-gold"/></div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-kit-gold font-bold">Location</p>
              <p className="text-sm font-semibold">Kangeyam-638108</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Links (6 Columns) ── */}
      <div className="max-w-[90rem] mx-auto px-5 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-slate-300 text-sm">
          
          <div>
            <h3 className="text-white font-bold text-[15px] mb-4 pb-2 border-b border-white/10 text-kit-gold relative after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-8 after:h-[1px] after:bg-kit-gold">KIT Links</h3>
            <ul className="space-y-2.5">
              <li><a href="https://www.kitech.edu.in/" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">KIT Home</a></li>
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Facilities</a></li>
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Placement</a></li>
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Contact KIT</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-[15px] mb-4 pb-2 border-b border-white/10 text-kit-gold relative after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-8 after:h-[1px] after:bg-kit-gold">Examination</h3>
            <ul className="space-y-2.5">
              <li><NavLink to="/regulations" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Instructions</NavLink></li>
              <li><NavLink to="/regulations" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Examination Rules</NavLink></li>
              <li><NavLink to="/results" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Autonomous Rank Holders</NavLink></li>
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Certificate Status</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-[15px] mb-4 pb-2 border-b border-white/10 text-kit-gold relative after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-8 after:h-[1px] after:bg-kit-gold">Services</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">AU Degree Status</a></li>
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Certificate Verification</a></li>
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Online Transcript</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-[15px] mb-4 pb-2 border-b border-white/10 text-kit-gold relative after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-8 after:h-[1px] after:bg-kit-gold">Downloads</h3>
            <ul className="space-y-2.5">
              <li><NavLink to="/downloads" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Medical Leave Form</NavLink></li>
              <li><NavLink to="/downloads" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Exam Withdrawal Form</NavLink></li>
              <li><NavLink to="/downloads" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Break of Study App</NavLink></li>
              <li><NavLink to="/downloads" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Duplicate Grade Sheet</NavLink></li>
              <li><NavLink to="/downloads" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">CGPA Conversion</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-[15px] mb-4 pb-2 border-b border-white/10 text-kit-gold relative after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-8 after:h-[1px] after:bg-kit-gold">Academic</h3>
            <ul className="space-y-2.5">
              <li><NavLink to="/timetable" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Academic Schedule</NavLink></li>
              <li><NavLink to="/notifications" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Circulars</NavLink></li>
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Medium of Instruction</a></li>
              <li><NavLink to="/results" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Autonomous Results</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-[15px] mb-4 pb-2 border-b border-white/10 text-kit-gold relative after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-8 after:h-[1px] after:bg-kit-gold">Quick Access</h3>
            <ul className="space-y-2.5">
              <li><NavLink to="/" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Home</NavLink></li>
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Genuineness Verification</a></li>
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">KIT Web Album</a></li>
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">KIT CRS</a></li>
              <li><a href="#" className="hover:text-kit-gold hover:translate-x-1 inline-block transition-all duration-200">Fitness Protocol</a></li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* ── Bottom Strip ── */}
      <div className="bg-[#001126] py-5 border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} KANGEYAM INSTITUTE OF TECHNOLOGY. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-kit-gold text-kit-navy-dark flex items-center justify-center hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#00a0e3] text-white flex items-center justify-center hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
            <a href="#" className="w-8 h-8 rounded-full bg-kit-crimson text-white flex items-center justify-center hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white text-kit-navy-dark flex items-center justify-center hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
