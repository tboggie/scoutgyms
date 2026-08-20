import DashboardShell from '@/components/layout/DashboardShell';

export default function ChallengesPage() {
  return (
    <DashboardShell variant="business">
      <div className="flex items-center justify-between mb-6"><h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight">Wellness challenges</h1><button className="bg-teal text-white px-4 py-2 rounded-lg text-sm font-semibold">+ Create challenge</button></div>
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <div className="flex items-center justify-between mb-4"><div><h2 className="font-semibold">August Step Challenge 🏃</h2><p className="text-sm text-text3">Aug 1 - Aug 31, 2026 · 156 participants</p></div><span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-light text-green">Active</span></div>
        <div className="space-y-2">{[{n:'Sarah Chen',s:48200},{n:'Mike Patel',s:42800},{n:'Lisa Wang',s:39100},{n:'David Kim',s:35600},{n:'Emma Brown',s:31200}].map((p,i)=>(<div key={p.n} className="flex items-center gap-3"><span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${i===0?'bg-amber':i===1?'bg-text3':i===2?'bg-coral':'bg-border text-text3'}`}>{i+1}</span><span className="text-sm font-medium flex-1">{p.n}</span><span className="text-sm text-text2">{p.s.toLocaleString()} steps</span></div>))}</div>
      </div>
      <div className="bg-card rounded-xl border border-border p-6"><div className="flex items-center justify-between mb-2"><div><h2 className="font-semibold">July Gym Visits Challenge 🏋️</h2><p className="text-sm text-text3">Jul 1 - Jul 31, 2026 · 134 participants</p></div><span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-text3/20 text-text3">Completed</span></div><p className="text-sm text-text2">Winner: Lisa Wang (22 visits)</p></div>
    </DashboardShell>
  );
}