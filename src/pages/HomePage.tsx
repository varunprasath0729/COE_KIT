import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, Bell, FileText, BarChart2, ShieldCheck, User } from 'lucide-react';
import { ANNOUNCEMENTS } from '../data/coeData';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | COE Portal — Kangeyam Institute of Technology</title>
        <meta name="description" content="Official Controller of Examinations portal for Kangeyam Institute of Technology." />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="bg-kit-navy-dark text-white relative pb-32 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-kit-navy to-kit-navy-dark pointer-events-none opacity-80" />
        <div className="max-w-7xl mx-auto px-5 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Office of the <span className="text-kit-gold">Controller</span> of Examinations
          </h2>
          <p className="max-w-3xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed mb-10 text-balance">
            Ensuring transparent and secure examinations with integrity. Dedicated to global standards and a seamless student experience. Committed to upholding the academic excellence and trust of our institutional community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <NavLink to="/regulations" className="bg-kit-gold text-kit-navy-dark px-8 py-3.5 rounded-xl font-extrabold text-sm shadow-lg hover:-translate-y-1 hover:shadow-kit-md transition-all duration-300">
              Examination Rules &rarr;
            </NavLink>
            <NavLink to="/notifications" className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-white/10 transition-all duration-300">
              View Circulars
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── Floating Quick Link Cards ── */}
      <div className="max-w-7xl mx-auto px-5 relative z-20 -mt-20 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <NavLink to="/timetable" className="bg-white rounded-2xl p-6 shadow-kit-md hover:-translate-y-1 transition-transform duration-300 border-b-4 border-blue-500 group flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
              <Clock size={28} />
            </div>
            <h3 className="text-kit-navy font-bold text-lg">Academic Schedule</h3>
          </NavLink>
          <NavLink to="/notifications" className="bg-white rounded-2xl p-6 shadow-kit-md hover:-translate-y-1 transition-transform duration-300 border-b-4 border-emerald-500 group flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
              <FileText size={28} />
            </div>
            <h3 className="text-kit-navy font-bold text-lg">Latest Circulars</h3>
          </NavLink>
          <a href="https://bec.sriss.co.in/CAMPS/JSP/Audit/audit_entry.jsp#" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-kit-md hover:-translate-y-1 transition-transform duration-300 border-b-4 border-purple-500 group flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
              <BarChart2 size={28} />
            </div>
            <h3 className="text-kit-navy font-bold text-lg">Exam Results</h3>
          </a>
          <a href="#" className="bg-white rounded-2xl p-6 shadow-kit-md hover:-translate-y-1 transition-transform duration-300 border-b-4 border-kit-gold group flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-kit-navy font-bold text-lg">Verification</h3>
          </a>
        </div>
      </div>

      {/* ── Main Content: Autonomy & Live Notifications ── */}
      <div className="max-w-7xl mx-auto px-5 py-8 mb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Academic Autonomy */}
          <section className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-kit-sm border border-kit-border">
            <h2 className="text-2xl font-extrabold text-kit-navy mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-kit-gold after:rounded">
              Academic Autonomy at KIT
            </h2>
            <div className="text-kit-body leading-relaxed space-y-4">
              <p>
                As an Autonomous Institution affiliated to Anna University, Kangeyam Institute of Technology holds the privilege to design its own curriculum and evaluation systems. The Office of the Controller of Examinations plays a pivotal role in this ecosystem.
              </p>
              <p>
                Our responsibilities encompass the meticulous scheduling of academic calendars, preparation of question papers that test critical thinking, and the execution of transparent evaluation processes. We pride ourselves on the swift and accurate publication of results, typically within 21 days of the last examination.
              </p>
              <p className="font-semibold text-kit-navy mt-4">
                "Committed to evaluating excellence with absolute integrity."
              </p>
            </div>
          </section>

          {/* Live Notifications */}
          <section className="bg-white rounded-2xl shadow-kit-sm border border-kit-border overflow-hidden flex flex-col">
            <div className="bg-kit-navy p-4 flex justify-between items-center text-white">
              <h3 className="font-bold flex items-center gap-2">
                <Bell size={18} className="text-kit-gold" /> Announcements
              </h3>
              <span className="bg-kit-crimson text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">Live</span>
            </div>
            <div className="flex-1 p-4 overflow-y-auto max-h-[320px] bg-kit-bg-alt">
              <div className="space-y-3">
                {ANNOUNCEMENTS.map(ann => (
                  <div key={ann.id} className="bg-white p-3 rounded-lg border-l-4 border-l-kit-gold shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-[10px] font-bold text-kit-muted uppercase mb-1">{ann.date}</p>
                    <p className="text-sm text-kit-navy font-semibold">{ann.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3 bg-white border-t border-kit-border text-center">
              <NavLink to="/notifications" className="text-kit-navy text-xs font-bold hover:text-kit-gold transition-colors">
                View All Circulars &rarr;
              </NavLink>
            </div>
          </section>
        </div>
      </div>

      {/* ── Leadership Section ── */}
      <section className="bg-kit-bg-alt py-16 border-t border-kit-border">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-kit-navy relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-kit-gold after:rounded">
              Team
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Staff 1 */}
            <div className="w-full md:w-[45%] lg:w-[30%] bg-kit-navy-dark rounded-2xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between items-center">
              <div className="w-20 h-20 mb-4 bg-kit-navy rounded-full border-2 border-kit-gold flex items-center justify-center text-kit-gold">
                <User size={36} />
              </div>
              <div className="w-full">
                <h3 className="text-white font-bold text-lg">Dr. Somasundaram.P</h3>
                <p className="text-slate-400 text-xs mb-3">M.E., Ph.D</p>
                <div className="w-12 h-1 mx-auto bg-kit-gold/30 rounded mb-3"></div>
              </div>
              <div className="w-full">
                <p className="text-kit-gold text-sm font-semibold">Controller of Examinations</p>
                <p className="text-slate-400 text-xs mt-1">Professor (Mechanical Engineering)</p>
              </div>
            </div>

            {/* Staff 2 */}
            <div className="w-full md:w-[45%] lg:w-[30%] bg-kit-navy-dark rounded-2xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between items-center">
              <div className="w-20 h-20 mb-4 bg-kit-navy rounded-full border-2 border-kit-gold flex items-center justify-center text-kit-gold">
                <User size={36} />
              </div>
              <div className="w-full">
                <h3 className="text-white font-bold text-lg">Dr. Shyam Vinod Kumar.P</h3>
                <p className="text-slate-400 text-xs mb-3">M.Sc., M.Phil, Ph.D</p>
                <div className="w-12 h-1 mx-auto bg-kit-gold/30 rounded mb-3"></div>
              </div>
              <div className="w-full">
                <p className="text-kit-gold text-sm font-semibold">Deputy Controller of Examinations</p>
                <p className="text-slate-400 text-xs mt-1">Assistant Professor (Physics)</p>
              </div>
            </div>

            {/* Staff 3 */}
            <div className="w-full md:w-[45%] lg:w-[30%] bg-kit-navy-dark rounded-2xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between items-center">
              <div className="w-20 h-20 mb-4 bg-kit-navy rounded-full border-2 border-kit-gold flex items-center justify-center text-kit-gold">
                <User size={36} />
              </div>
              <div className="w-full">
                <h3 className="text-white font-bold text-lg">Ms. Reena.L</h3>
                <p className="text-slate-400 text-xs mb-3">M.E., (Ph.D)</p>
                <div className="w-12 h-1 mx-auto bg-kit-gold/30 rounded mb-3"></div>
              </div>
              <div className="w-full">
                <p className="text-kit-gold text-sm font-semibold">Assistant Professor (Sr.Gr)</p>
                <p className="text-slate-400 text-xs mt-1">Department of Civil Engineering</p>
              </div>
            </div>

            {/* Staff 4 */}
            <div className="w-full md:w-[45%] lg:w-[30%] bg-kit-navy-dark rounded-2xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between items-center">
              <div className="w-20 h-20 mb-4 bg-kit-navy rounded-full border-2 border-kit-gold flex items-center justify-center text-kit-gold">
                <User size={36} />
              </div>
              <div className="w-full">
                <h3 className="text-white font-bold text-lg">Ms. Nikitha.S</h3>
                <p className="text-slate-400 text-xs mb-3">B.Sc</p>
                <div className="w-12 h-1 mx-auto bg-kit-gold/30 rounded mb-3"></div>
              </div>
              <div className="w-full">
                <p className="text-kit-gold text-sm font-semibold">Data Entry Operator</p>
              </div>
            </div>

            {/* Staff 5 */}
            <div className="w-full md:w-[45%] lg:w-[30%] bg-kit-navy-dark rounded-2xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between items-center">
              <div className="w-20 h-20 mb-4 bg-kit-navy rounded-full border-2 border-kit-gold flex items-center justify-center text-kit-gold">
                <User size={36} />
              </div>
              <div className="w-full">
                <h3 className="text-white font-bold text-lg">Mr. Eswaran</h3>
                <p className="text-slate-400 text-xs mb-3">HSC</p>
                <div className="w-12 h-1 mx-auto bg-kit-gold/30 rounded mb-3"></div>
              </div>
              <div className="w-full">
                <p className="text-kit-gold text-sm font-semibold">Office Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
