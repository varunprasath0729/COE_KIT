import { Helmet } from 'react-helmet-async';
import { Calendar, Download, Archive } from 'lucide-react';

const ARCHIVE_YEARS = [
  '2026-2027',
  '2025-2026',
  '2024-2025',
  '2023-2024',
  '2022-2023',
  '2021-2022',
  '2020-2021'
];

export default function TimetablePage() {
  return (
    <>
      <Helmet>
        <title>Academic Schedule | COE — KIT</title>
        <meta name="description" content="Access academic calendars and schedules for all years at KIT." />
      </Helmet>

      {/* Blue Hero Banner */}
      <div className="bg-[#0b2f6b] text-white px-8 pt-12 pb-24 text-center rounded-b-[40px] -mx-5 -mt-5">
        <h1 className="text-4xl md:text-5xl font-black mb-3">
          Academic <span className="text-kit-gold">Schedule</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Stay updated with the latest academic calendar, examination dates, and important deadlines for all programs.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-5">
        {/* Schedule Archive Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative z-10 -mt-12 mb-20 border border-kit-border/50">
          
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-xl font-extrabold text-kit-navy flex items-center gap-2 mb-1">
                <Archive className="text-kit-gold" size={20} /> Schedule Archive
              </h2>
              <p className="text-sm text-kit-body">Access academic calendars and schedules for all years</p>
            </div>
            <span className="bg-[#e6f0fa] text-[#0056b3] text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider self-start md:self-auto">
              Available: 2015 - 2027
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate" style={{ borderSpacing: '0 12px' }}>
              <thead>
                <tr>
                  <th className="text-[#00a0e3] font-black uppercase text-xs pb-2 pl-4">Academic Year</th>
                  <th className="text-[#00a0e3] font-black uppercase text-xs pb-2 text-center">Calendar</th>
                  <th className="text-[#00a0e3] font-black uppercase text-xs pb-2 text-center">Odd Semester</th>
                  <th className="text-[#00a0e3] font-black uppercase text-xs pb-2 text-center">Even Semester</th>
                </tr>
              </thead>
              <tbody>
                {ARCHIVE_YEARS.map((year) => (
                  <tr key={year} className="group">
                    <td className="py-4 pl-4 border-b border-kit-border/40">
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-kit-gold transition-colors"></span>
                        <span className="font-extrabold text-lg text-gray-800">{year}</span>
                      </div>
                    </td>
                    <td className="py-4 border-b border-kit-border/40 text-center">
                      <button 
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#fff0f0] hover:bg-[#cc0000] text-[#cc0000] hover:text-white border border-[#ffcccc] rounded-md font-bold text-sm transition-colors duration-200"
                        onClick={() => alert(`View Calendar ${year}`)}
                      >
                        <Calendar size={16} /> View Calendar
                      </button>
                    </td>
                    <td className="py-4 border-b border-kit-border/40 text-center">
                      <button 
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#f5f7fa] hover:bg-[#e2e8f0] text-[#4a5568] border border-[#e2e8f0] rounded-md font-bold text-sm transition-colors duration-200"
                        onClick={() => alert(`Odd Sem ${year}`)}
                      >
                        <Download size={16} /> View Schedule
                      </button>
                    </td>
                    <td className="py-4 border-b border-kit-border/40 text-center">
                      <button 
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#f5f7fa] hover:bg-[#e2e8f0] text-[#4a5568] border border-[#e2e8f0] rounded-md font-bold text-sm transition-colors duration-200"
                        onClick={() => alert(`Even Sem ${year}`)}
                      >
                        <Download size={16} /> View Schedule
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
