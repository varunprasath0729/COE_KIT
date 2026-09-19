import { Helmet } from 'react-helmet-async';
import { AlertTriangle, BookOpen, ShieldAlert, Ban } from 'lucide-react';

const OFFENCES = [
  {
    sl: 1,
    nature: 'Possessing written or printed material relevant to the examination, within the range of the candidate, at the time of the examination.',
    punishment: 'Cancellation of the particular course of examination.'
  },
  {
    sl: 2,
    nature: 'Copying from notes, books or any other source or from the answer sheets of other candidates during the examination.',
    punishment: 'Cancellation of the entire examinations of that semester.'
  },
  {
    sl: 3,
    nature: 'Communicating, aiding or assisting directly or indirectly with other candidates during the examination.',
    punishment: 'Cancellation of the entire examinations of that semester.'
  },
  {
    sl: 4,
    nature: 'Writing on any material other than the answer sheets provided.',
    punishment: 'Cancellation of the particular course of examination and a fine of Rs.5000/-.'
  },
  {
    sl: 5,
    nature: 'Smuggling in or smuggling out or attempting to smuggle in or smuggle out answer scripts.',
    punishment: 'Cancellation of all courses of examination of that semester and debarment from examinations for one subsequent semester.'
  },
  {
    sl: 6,
    nature: 'Impersonation — appearing for another candidate or engaging someone else to write the examination.',
    punishment: 'Cancellation of all courses of examination of that semester and debarment from examinations for two subsequent semesters. Both the candidate and the impersonator will be punished.'
  },
  {
    sl: 7,
    nature: 'Using programmable calculators, mobile phones, Bluetooth devices, smart watches, or any other electronic gadgets inside the examination hall.',
    punishment: 'Cancellation of the particular course of examination and confiscation of the device.'
  },
  {
    sl: 8,
    nature: 'Threatening, intimidating, or using violence against the invigilator, flying squad, or any official connected with the examination.',
    punishment: 'Cancellation of all courses of examination of that semester and permanent debarment from the institution. Criminal proceedings may also be initiated.'
  },
  {
    sl: 9,
    nature: 'Revealing identity (writing name, register number, or any identifying mark) in the answer script other than the designated place.',
    punishment: 'Cancellation of the particular course of examination.'
  },
  {
    sl: 10,
    nature: 'Any other act of malpractice not specified above.',
    punishment: 'As decided by the Examination Disciplinary Committee based on the severity of the offence.'
  }
];

export default function RegulationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <Helmet>
        <title>Examination Rules | COE Portal — Kangeyam Institute of Technology</title>
      </Helmet>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-kit-navy to-[#004080] rounded-2xl p-10 md:p-14 mb-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert size={32} className="text-kit-gold" />
            <span className="bg-kit-crimson text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Important</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
            Instructions of Examination Malpractice
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl">
            Detailed classification of offences and punitive actions
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-2xl p-8 shadow-kit-sm border border-kit-border mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-kit-crimson shrink-0 mt-1">
            <AlertTriangle size={24} />
          </div>
          <p className="text-kit-body text-[15px] leading-relaxed">
            If a candidate indulges in malpractice in any of the tests or end semester examinations, he/she shall be liable for punitive action as per the examination rules prescribed by the college from time to time. The current rules of the examinations are given below.
          </p>
        </div>
      </div>

      {/* Rule Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-2xl p-8 shadow-kit-sm border border-kit-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 rounded-l-2xl" />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-extrabold text-lg">1</div>
            <h3 className="text-kit-navy font-bold text-lg">Permitted Materials</h3>
          </div>
          <p className="text-kit-body text-[14px] leading-relaxed pl-[52px]">
            A candidate is permitted to use geometric tools, non-programmable calculators and approved tables and data books only during the theory and the practical examinations. <strong className="text-kit-navy">No other material / gadget (including cell phone) should be brought inside the examination hall.</strong>
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-kit-sm border border-kit-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-kit-crimson rounded-l-2xl" />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-kit-crimson font-extrabold text-lg">2</div>
            <h3 className="text-kit-navy font-bold text-lg">Forbidden Activities</h3>
          </div>
          <p className="text-kit-body text-[14px] leading-relaxed pl-[52px]">
            A candidate should neither possess / refer to any forbidden material in any form nor should seek/obtain assistance in any form from any person / source towards answering the questions during the examinations. He/she should not assist any other candidates in any form towards answering the questions during the examinations. The candidate should not reveal his / her identity in any form in the answer scripts. The candidate should not indulge in canvassing either directly or indirectly for the award of more than the deserving marks in the examinations. The candidate should maintain discipline and decorum during the examinations.
          </p>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-gradient-to-r from-kit-crimson/10 to-red-50 border-2 border-kit-crimson/30 rounded-2xl p-6 md:p-8 mb-10 flex items-start gap-4">
        <div className="w-12 h-12 bg-kit-crimson rounded-xl flex items-center justify-center shrink-0">
          <Ban size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-kit-crimson font-extrabold text-lg mb-2">Warning</h3>
          <p className="text-kit-body text-[14px] leading-relaxed">
            Violation of the above rules in any form during the examinations will attract punishment ranging from <strong className="text-kit-navy">levying fine</strong> to <strong className="text-kit-navy">permanently debarring the candidate</strong> from continuing his / her studies as given below.
          </p>
        </div>
      </div>

      {/* Offences Table */}
      <div className="bg-white rounded-2xl shadow-kit-sm border border-kit-border overflow-hidden mb-8">
        <div className="bg-kit-navy p-6 flex items-center gap-3">
          <BookOpen size={22} className="text-kit-gold" />
          <h2 className="text-white font-extrabold text-xl">Classification of Offences & Punitive Actions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-kit-navy/5 border-b-2 border-kit-border">
                <th className="px-5 py-4 text-left text-xs font-extrabold text-kit-navy uppercase tracking-wider w-12">Sl.No</th>
                <th className="px-5 py-4 text-left text-xs font-extrabold text-kit-navy uppercase tracking-wider">Nature of Malpractice</th>
                <th className="px-5 py-4 text-left text-xs font-extrabold text-kit-navy uppercase tracking-wider w-[35%]">Punishment</th>
              </tr>
            </thead>
            <tbody>
              {OFFENCES.map((row, i) => (
                <tr key={row.sl} className={`border-b border-kit-border/50 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                  <td className="px-5 py-4 text-center">
                    <span className="w-7 h-7 bg-kit-navy text-white rounded-full inline-flex items-center justify-center text-xs font-bold">{row.sl}</span>
                  </td>
                  <td className="px-5 py-4 text-kit-body text-[13px] leading-relaxed">{row.nature}</td>
                  <td className="px-5 py-4 text-kit-crimson font-semibold text-[13px] leading-relaxed">{row.punishment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-kit-navy/5 rounded-2xl p-6 border border-kit-border text-center">
        <p className="text-kit-muted text-sm">
          These rules are subject to amendments by the Examination Committee from time to time. Students are advised to familiarize themselves with the latest regulations before appearing for examinations.
        </p>
      </div>
    </div>
  );
}
