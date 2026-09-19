import { Helmet } from 'react-helmet-async';
import { EXAM_TYPES } from '../data/coeData';

export default function ExaminationsPage() {
  return (
    <>
      <Helmet>
        <title>Examination System | COE — KIT</title>
        <meta name="description" content="Understand KIT's examination system including ESE, CIA, Practical, Arrear and Supplementary exam types, rules, and code of conduct." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="section-header">
          <h1 className="section-title">Examination System & Assessment Types</h1>
          <p className="section-sub mt-6">Detailed rules for all 5 examination categories at Kangeyam Institute of Technology</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 mb-10">
          {EXAM_TYPES.map(ex => (
            <article key={ex.code} className="card border-t-4 border-kit-navy hover:shadow-kit-lg transition-all duration-200">
              <span className="badge-gold mb-3">{ex.code}</span>
              <h2 className="text-base font-bold text-kit-navy mb-3">{ex.name}</h2>
              <p className="text-sm text-kit-body leading-relaxed">{ex.desc}</p>
            </article>
          ))}
        </div>

        <div className="card border-l-4 border-kit-navy">
          <h2 className="text-lg font-bold text-kit-navy mb-3">⚖ Code of Conduct & Malpractice Rules</h2>
          <p className="text-sm text-kit-body leading-relaxed mb-4">
            Kangeyam Institute of Technology enforces strict zero-tolerance policies regarding examination malpractice as mandated by Anna University and Autonomous Academic Standing Orders. Any candidate found guilty of malpractice will face disciplinary action as per the Anna University Malpractice Rules.
          </p>
          <button className="btn-outline btn-sm" onClick={() => alert('[Document to be provided by KIT COE]')}>
            📄 Download Malpractice Rules Manual (PDF)
          </button>
        </div>
      </div>
    </>
  );
}
