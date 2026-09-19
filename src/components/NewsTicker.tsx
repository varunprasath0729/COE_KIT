import { ANNOUNCEMENTS } from '../data/coeData';

export default function NewsTicker() {
  const items = ANNOUNCEMENTS.map(a => `${a.tag}: ${a.date} — ${a.title}`).join('  •  ');

  return (
    <div className="bg-white border-b border-kit-border flex items-center overflow-hidden shadow-kit-sm no-print" aria-live="polite" aria-label="Latest announcements">
      <div className="bg-kit-crimson text-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider whitespace-nowrap z-10 shrink-0 flex items-center gap-2">
        📢 Latest
      </div>
      <div className="flex-1 overflow-hidden py-2">
        <div className="inline-block whitespace-nowrap animate-ticker text-sm font-semibold text-kit-navy-dark">
          {items}&nbsp;&nbsp;&nbsp;&nbsp;{items}
        </div>
      </div>
    </div>
  );
}
