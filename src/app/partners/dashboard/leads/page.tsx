import DashboardShell from '@/components/layout/DashboardShell';

const leads = [
  { name: 'Jake Mitchell', source: 'Referral link', date: 'Aug 15, 2026', status: 'converted', email: 'jake.m@email.com', value: '$39/mo' },
  { name: 'Rachel Park', source: 'Direct search', date: 'Aug 12, 2026', status: 'trial booked', email: 'rachel.p@email.com', value: '$39/mo' },
  { name: 'Marcus Johnson', source: 'Corporate', date: 'Aug 10, 2026', status: 'contacted', email: 'marcus.j@acme.com', value: '$29/mo' },
  { name: 'Emma Rodriguez', source: 'Smart match quiz', date: 'Aug 8, 2026', status: 'converted', email: 'emma.r@email.com', value: '$39/mo' },
  { name: 'Tyler Chen', source: 'Direct search', date: 'Aug 6, 2026', status: 'new', email: 'tyler.c@email.com', value: '$39/mo' },
  { name: 'Sophie Williams', source: 'Referral link', date: 'Aug 3, 2026', status: 'trial booked', email: 'sophie.w@email.com', value: '$39/mo' },
  { name: 'David Okafor', source: 'Corporate', date: 'Aug 1, 2026', status: 'converted', email: 'david.o@techstart.com', value: '$29/mo' },
  { name: 'Amanda Liu', source: 'Direct search', date: 'Jul 28, 2026', status: 'lost', email: 'amanda.l@email.com', value: '$39/mo' },
];

export default function LeadsPage() {
  const converted = leads.filter(l => l.status === 'converted').length;
  const rate = Math.round((converted / leads.length) * 100);

  return (
    <DashboardShell variant="partners">
      <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Leads</h1>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Total leads (30d)</p><p className="font-[var(--font-display)] text-2xl font-bold text-teal">{leads.length}</p></div>
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Converted</p><p className="font-[var(--font-display)] text-2xl font-bold text-green">{converted}</p></div>
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Conversion rate</p><p className="font-[var(--font-display)] text-2xl font-bold text-purple">{rate}%</p></div>
      </div>
      <div className="bg-card rounded-xl border border-border overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead><tr className="border-b border-border">{['Name','Email','Source','Date','Value','Status'].map(h=>(<th key={h} className="text-left p-4 text-xs font-semibold text-text3 uppercase">{h}</th>))}</tr></thead>
          <tbody>{leads.map(l=>(
            <tr key={l.name} className="border-b border-border last:border-none hover:bg-bg2">
              <td className="p-4 text-sm font-medium">{l.name}</td>
              <td className="p-4 text-sm text-text2">{l.email}</td>
              <td className="p-4 text-sm text-text2">{l.source}</td>
              <td className="p-4 text-sm text-text3">{l.date}</td>
              <td className="p-4 text-sm font-medium text-teal">{l.value}</td>
              <td className="p-4"><span className={`text-xs font-semibold px-2 py-1 rounded-full ${l.status==='converted'?'bg-green-light text-green':l.status==='trial booked'?'bg-blue-light text-blue':l.status==='contacted'?'bg-amber-light text-amber':l.status==='new'?'bg-teal-light text-teal':'bg-red-light text-red'}`}>{l.status}</span></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </DashboardShell>
  );
}
