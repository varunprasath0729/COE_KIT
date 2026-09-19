import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Printer } from 'lucide-react';
import { DEMO_STUDENTS, INSTITUTION } from '../data/coeData';
import type { Student } from '../data/coeData';

const GRADE_CLASSES: Record<string, string> = { O: 'grade-O', 'A+': 'grade-Ap', A: 'grade-A', 'B+': 'grade-Bp', RA: 'grade-RA' };

export default function ResultsPage() {
  const [regNo, setRegNo] = useState('731821104001');
  const [sem, setSem] = useState('VI');
  const [student, setStudent] = useState<Student | undefined>(undefined);
  const [error, setError] = useState('');

  const search = () => {
    setError('');
    const s = DEMO_STUDENTS[regNo];
    if (!s) { setError(`No result record found for Register No: ${regNo}. Try 731821104001 or 731822104025.`); setStudent(undefined); return; }
    setStudent(s);
  };

  return (
    <>
      <Helmet>
        <title>Examination Results | COE — KIT</title>
        <meta name="description" content="View and download your official End Semester Examination grade statement and SGPA/CGPA from KIT COE results portal." />
      </Helmet>

      <div className="max-w-5xl mx-auto px-5 py-10">
        {/* Search */}
        <div className="section-header mb-8 no-print">
          <h1 className="section-title">End Semester Examination Results Portal</h1>
          <p className="section-sub mt-6">Enter your register number to view official grade statement</p>
        </div>

        <div className="card mb-6 no-print">
          <div className="grid sm:grid-cols-3 gap-4 items-end">
            <div>
              <label htmlFor="res-reg" className="form-label">Register Number *</label>
              <input id="res-reg" type="text" value={regNo} onChange={e => setRegNo(e.target.value)}
                className="form-input" placeholder="12-digit Register No" />
            </div>
            <div>
              <label htmlFor="res-sem" className="form-label">Semester</label>
              <select id="res-sem" value={sem} onChange={e => setSem(e.target.value)} className="form-input">
                {['II','IV','VI','VIII'].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <button onClick={search} className="btn-primary flex items-center gap-2">
              <Search size={15} /> View Results
            </button>
          </div>
          <p className="text-xs text-kit-muted mt-3">Demo: <code className="bg-kit-bg-alt px-1 py-0.5 rounded">731821104001</code> or <code className="bg-kit-bg-alt px-1 py-0.5 rounded">731822104025</code></p>
        </div>

        {error && <div className="card border-l-4 border-kit-crimson mb-6 bg-red-50"><p className="text-kit-crimson font-semibold">⚠ {error}</p></div>}

        {student && (
          <div className="card animate-fade-in">
            {/* Print header */}
            <div className="flex justify-between items-center mb-5 no-print">
              <span className="badge-gold text-sm">📋 Official Grade Statement</span>
              <button onClick={() => window.print()} className="btn-outline flex items-center gap-2"><Printer size={14} /> Print Mark Sheet</button>
            </div>

            {/* Institution header */}
            <div className="flex justify-between items-center border-b-2 border-kit-navy pb-4 mb-6">
              <img src={INSTITUTION.logoUrl} alt="KIT Logo" className="h-14" loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/140x56?text=KIT'; }} />
              <div className="text-center">
                <h2 className="text-lg font-extrabold text-kit-navy">KANGEYAM INSTITUTE OF TECHNOLOGY</h2>
                <p className="text-sm font-bold text-kit-crimson">OFFICE OF THE CONTROLLER OF EXAMINATIONS</p>
                <p className="text-xs text-kit-muted">Statement of Grade — End Semester Examinations</p>
              </div>
              <div className="text-right text-xs"><strong>TNEA:</strong> {INSTITUTION.tneaCode}<br /><strong>Status:</strong> Autonomous</div>
            </div>

            {/* Student meta */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-kit-bg-alt rounded-xl p-5 mb-6">
              {[
                ['Register Number', student.registerNo],
                ['Student Name', student.name],
                ['Degree & Branch', `${student.degree} ${student.branch}`],
                ['Semester & Regulation', `Sem ${sem} (${student.regulation})`],
              ].map(([label, val]) => (
                <div key={label}>
                  <p className="text-[10px] font-bold text-kit-muted uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="font-bold text-kit-navy text-sm">{val}</p>
                </div>
              ))}
            </div>

            {/* Results table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full" aria-label="Grade Statement">
                <thead>
                  <tr>
                    {['Course Code','Course Title','Credits','Grade','Points','Result'].map(h => (
                      <th key={h} scope="col" className="table-th">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {student.results.map(r => (
                    <tr key={r.code} className="table-tr hover:bg-kit-bg-alt">
                      <td className="table-td font-mono text-xs">{r.code}</td>
                      <td className="table-td font-semibold">{r.title}</td>
                      <td className="table-td">{r.credits}</td>
                      <td className="table-td"><span className={GRADE_CLASSES[r.grade] || 'badge'}>{r.grade}</span></td>
                      <td className="table-td font-bold">{r.points}</td>
                      <td className="table-td"><span className={`font-bold ${r.result === 'PASS' ? 'text-emerald-600' : 'text-kit-crimson'}`}>{r.result}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SGPA/CGPA bar */}
            <div className="bg-kit-navy rounded-xl p-5 flex flex-wrap gap-6">
              {[['SEMESTER SGPA', student.sgpa], ['CUMULATIVE CGPA', student.cgpa], ['CLASSIFICATION', 'FIRST CLASS WITH DISTINCTION']].map(([label, val]) => (
                <div key={label as string}>
                  <p className="text-xs text-slate-400 font-bold uppercase">{label}</p>
                  <p className="text-2xl font-extrabold text-kit-gold mt-1">{val}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
