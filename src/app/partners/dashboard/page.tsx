import DashboardShell from '@/components/layout/DashboardShell';

export default function PartnerDashboard() {
  return (
    <DashboardShell variant="partners">
      <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Gym dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[{l:'Profile views',v:'1,247',c:'text-teal'},{l:'Comparisons',v:'342',c:'text-purple'},{l:'Leads',v:'28',c:'text-green'},{l:'Rating',v:'4.8 ⭐',c:'text-amber'}].map(s=>(
          <div key={s.l} className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">{s.l}</p><p className={`font-[var(--font-display)] text-2xl font-bold ${s.c}`}>{s.v}</p></div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-6"><h2 className="font-semibold mb-4">Recent reviews</h2>{[{n:'Jake M.',r:5,t:'Best gym in the area'},{n:'Sarah K.',r:4,t:'Great equipment selection'},{n:'Mike R.',r:5,t:'Switched and never looked back'}].map(r=>(<div key={r.n} className="py-3 border-b border-border last:border-none flex items-center justify-between"><div><p className="text-sm font-medium">{r.n}</p><p className="text-xs text-text3">{r.t}</p></div><span className="text-sm text-amber">{'⭐'.repeat(r.r)}</span></div>))}</div>
        <div className="bg-card rounded-xl border border-border p-6"><h2 className="font-semibold mb-4">Compared against</h2>{['FitLife 24/7','Peak Athletics','Zen Fitness','Flex Factory'].map(g=>(<div key={g} className="py-3 border-b border-border last:border-none flex items-center justify-between"><span className="text-sm text-text2">{g}</span><span className="text-xs text-text3">compared 42 times</span></div>))}</div>
      </div>
    </DashboardShell>
  );
}