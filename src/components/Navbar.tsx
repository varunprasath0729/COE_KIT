import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap, Mail, Phone, Zap } from 'lucide-react';

import { INSTITUTION } from '../data/coeData';
import LoginModal from './LoginModal';

const NAV_LINKS = [
  { to: '/',             label: 'HOME' },
  { to: '/timetable',    label: 'ACADEMIC SCHEDULE' },
  { to: '/notifications',label: 'CIRCULAR' },
  { to: '/examinations', label: 'EXAMS' },
  { to: 'https://bec.sriss.co.in/CAMPS/JSP/Audit/audit_entry.jsp#', label: 'RESULTS', external: true },
  { to: '/about',        label: 'SERVICES' },
  { to: '/downloads',    label: 'DOWNLOADS' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loginModal, setLoginModal] = useState<'student' | 'faculty' | 'admin' | undefined>(undefined);




  // Close mobile nav on route change
  useEffect(() => { setOpen(false); }, []);

  return (
    <>
      {/* ── Top Announcement Bar ── */}
      <div className="flex text-white text-[11px] font-semibold tracking-wide h-[34px] w-full overflow-hidden no-print">
        {/* Left Side */}
        <div className="bg-kit-navy flex-1 flex items-center px-4 relative z-10" style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%)' }}>
          <div className="flex items-center gap-4 w-full">
             <span className="hidden lg:inline-block font-bold shrink-0">Office of the Controller of Examinations - Kangeyam Institute of Technology</span>
             <Zap size={12} className="text-kit-gold shrink-0 fill-kit-gold hidden lg:block" />
             <div className="flex-1 overflow-hidden whitespace-nowrap pl-2 lg:pl-0">
               <div className="inline-block animate-ticker">
                 Autonomous | Affiliated to Anna University | Accredited by NAAC with A+ Grade
               </div>
             </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="bg-[#004b93] flex items-center px-6 pl-12 -ml-6 relative z-0 shrink-0 hidden md:flex">
          <div className="flex items-center gap-6">
            <a href="mailto:coe@kit.edu.in" className="flex items-center gap-1.5 hover:text-kit-gold transition-colors">
              <Mail size={12} />
              coe@kit.edu.in
            </a>
            <a href={`tel:${INSTITUTION.womenHelpline}`} className="flex items-center gap-1.5 hover:text-kit-gold transition-colors">
              <Phone size={12} />
              0422 - 236645, 236625
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <header className="bg-white border-b border-kit-border shadow-kit-md sticky top-0 z-50 no-print">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex justify-between items-center">
          
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={INSTITUTION.logoUrl}
              alt="KIT Logo"
              className="h-[64px] w-auto object-contain -ml-2"
              loading="eager"
            />
            <div className="flex gap-2 ml-2">
              <div className="h-[46px] w-[50px] flex items-center justify-center flex-col relative">
                <div className="bg-[#cc0000] w-full text-center text-white font-extrabold text-[16px] leading-tight rounded-t-sm shadow-sm pt-0.5 relative z-10">
                  A+
                </div>
                <div className="bg-[#d4af37] w-[90%] text-center text-[#003366] font-extrabold text-[9px] pb-0.5 rounded-b-sm shadow-sm relative z-0 -mt-0.5">
                  NAAC
                </div>
              </div>
            </div>
          </NavLink>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex items-center h-full space-x-1" role="menubar">
              {NAV_LINKS.map(link => (
                <li key={link.to} role="none" className="h-full flex items-center relative group">
                  {link.external ? (
                    <a
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="menuitem"
                      className="px-2.5 xl:px-3 py-2 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider transition-colors h-full flex items-center relative gap-1.5 whitespace-nowrap text-kit-body hover:text-kit-navy"
                    >
                      {link.label}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00a0e3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                    </a>
                  ) : (
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      role="menuitem"
                      className={({ isActive }) =>
                        `px-2.5 xl:px-3 py-2 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider transition-colors h-full flex items-center relative gap-1.5 whitespace-nowrap
                        ${isActive
                          ? 'text-kit-navy'
                          : 'text-kit-body hover:text-kit-navy'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          {link.label === 'CIRCULAR' && (
                            <span className="bg-kit-crimson text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-sm uppercase animate-pulse">New</span>
                          )}
                          {isActive && (
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00a0e3]" />
                          )}
                          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00a0e3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                        </>
                      )}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section (Login/Ribbon & Mobile Toggle) */}
          <div className="flex items-center h-full">
            {/* TNEA Ribbon */}
            <div className="hidden md:flex h-12 bg-kit-crimson text-white px-5 items-center justify-center relative font-extrabold text-xs shadow-md ml-2 xl:ml-4 shrink-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}>
              <div className="flex flex-col items-center pb-1">
                <span className="text-[9px] uppercase tracking-wider opacity-90">TNEA CODE</span>
                <span className="text-white text-base leading-none tracking-wide flex items-center gap-1 mt-0.5">
                  <GraduationCap size={14} /> 2656
                </span>
              </div>
            </div>



            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-kit-navy ml-4 p-2"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(p => !p)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        <div className={`lg:hidden bg-kit-bg border-t border-kit-border absolute w-full left-0 transition-all ${open ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
          <ul className="flex flex-col p-4 space-y-2">
             {NAV_LINKS.map(link => (
              <li key={link.to}>
                {link.external ? (
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm font-bold uppercase rounded-lg transition-colors text-kit-navy hover:bg-kit-navy/5"
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-sm font-bold uppercase rounded-lg transition-colors
                      ${isActive
                        ? 'bg-kit-navy text-white'
                        : 'text-kit-navy hover:bg-kit-navy/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ── Login modals ── */}
      {loginModal && (
        <LoginModal
          type={loginModal}
          onClose={() => setLoginModal(undefined)}
        />
      )}
    </>
  );
}
