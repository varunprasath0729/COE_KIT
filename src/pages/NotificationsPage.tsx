import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { NOTIFICATIONS } from '../data/coeData';
import { usePagination } from '../hooks/usePagination';

const CATS = ['All', 'Results', 'Revaluation', 'Time Table', 'Examinations', 'Regulations', 'Hall Ticket', 'Forms'];

export default function NotificationsPage() {
  const [cat, setCat]     = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let data = NOTIFICATIONS;
    if (cat !== 'All') data = data.filter(n => n.category === cat);
    if (query) data = data.filter(n => n.title.toLowerCase().includes(query.toLowerCase()) || n.refNo.toLowerCase().includes(query.toLowerCase()));
    return data;
  }, [cat, query]);

  const { page, pageItems, totalPages, goTo, start, total } = usePagination(filtered, 5);

  return (
    <>
      <Helmet>
        <title>Notifications & Circulars | COE — KIT</title>
        <meta name="description" content="Official COE circulars, notifications, results releases, timetable announcements, and examination guidelines from KIT." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="section-header">
          <h1 className="section-title">COE Circulars & Notifications Repository</h1>
          <p className="section-sub mt-6">Official announcements, result releases, and academic notices</p>
        </div>

        {/* Filter bar */}
        <div className="card mb-6 mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter by category">
            {CATS.map(c => (
              <button key={c} onClick={() => { setCat(c); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all duration-200 ${cat === c ? 'bg-kit-navy text-white border-kit-navy' : 'bg-white text-kit-body border-kit-border hover:border-kit-navy hover:text-kit-navy'}`}
                aria-pressed={cat === c}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative min-w-48">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-kit-muted" />
            <input type="search" placeholder="Search circulars…" aria-label="Search notifications" value={query}
              onChange={e => setQuery(e.target.value)}
              className="form-input pl-8 py-2 text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="card p-0 overflow-x-auto">
          <table className="w-full" aria-label="COE Notifications">
            <caption className="sr-only">List of official COE notifications and circulars</caption>
            <thead>
              <tr>
                {['Ref Number','Date','Notification Title','Category','Action'].map(h => (
                  <th key={h} scope="col" className="table-th">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pageItems.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-10 text-kit-muted">No circulars match your criteria.</td></tr>
              ) : pageItems.map(n => (
                <tr key={n.id} className="table-tr hover:bg-kit-bg-alt">
                  <td className="table-td font-mono text-xs">{n.refNo}</td>
                  <td className="table-td text-sm whitespace-nowrap">{n.date}</td>
                  <td className="table-td font-semibold text-kit-navy">{n.title}</td>
                  <td className="table-td"><span className="badge-gold">{n.category}</span></td>
                  <td className="table-td">
                    <button className="btn-outline btn-sm" aria-label={`View PDF for ${n.title}`} onClick={() => alert(`Viewing: ${n.refNo}`)}>
                      View PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 flex-wrap gap-3" aria-label="Pagination">
          <span className="text-sm text-kit-muted">
            Showing {total > 0 ? start + 1 : 0}–{Math.min(start + 5, total)} of {total} notices
          </span>
          <div className="flex gap-1.5">
            <button className="page-btn" disabled={page === 1} onClick={() => goTo(page - 1)} aria-label="Previous page">
              <ChevronLeft size={14} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button key={p} onClick={() => goTo(p)}
                className={`page-btn ${p === page ? 'page-btn-active' : ''}`}
                aria-label={`Page ${p}`} aria-current={p === page ? 'page' : undefined}
              >{p}</button>
            ))}
            <button className="page-btn" disabled={page === totalPages} onClick={() => goTo(page + 1)} aria-label="Next page">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
