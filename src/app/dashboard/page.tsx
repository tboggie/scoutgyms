import DashboardShell from '@/components/layout/DashboardShell';
import Link from 'next/link';
import { MOCK_GYMS, MOCK_REFERRALS } from '@/lib/mock-data';

export default function DashboardPage() {
  const totalEarned = MOCK_REFERRALS.reduce((s,r)=>s+r.amount,0);
  return (
    <DashboardShell>
      <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[{l:'Total earned',v:`$${totalEarned}`,c:'text-green'},{l:'Active referrals',v:String(MOCK_REFERRALS.length),c:'text-teal'},{l:'Saved gyms',v:'3',c:'text-purple'},{l:'Price alerts',v:'2',c:'text-amber'}].map(s=>(
          <div key={s.l} className="bg-card rounded-xl border border-border p-5">
            <p className="text-xs text-text3 font-medium mb-1">{s.l}</p>
            <p className={`font-[var(--font-display)] text-2xl font-bold ${s.c}`}>{s.v}</p>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-semibold mb-4">Recent referrals</h2>
          <div className="space-y-3">
            {MOCK_REFERRALS.map(r=>(
              <div key={r.id} className="flex items-center justify-between py-2 border-b border-border last:border-none">
                <div><p className="text-sm font-medium">{r.refereeName}</p><p className="text-xs text-text3">{r.gym} · {r.date}</p></div>
                <div className="text-right"><p className={`text-sm font-semibold ${r.status==='paid'?'text-green':r.status==='recurring'?'text-blue':'text-amber'}`}>+${r.amount}</p><p className="text-[10px] text-text3 capitalize">{r.status}</p></div>
              </div>
            ))}
          </div>
          <Link href="/dashboard/referrals" className="block text-center text-sm text-teal font-semibold mt-4 hover:underline">View all referrals →</Link>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-semibold mb-4">Saved gyms</h2>
          <div className="space-y-3">
            {MOCK_GYMS.slice(0,3).map(g=>(
              <div key={g.id} className="flex items-center justify-between py-2 border-b border-border last:border-none">
                <div><p className="text-sm font-medium">{g.name}</p><p className="text-xs text-text3">{g.distance} miles · ⭐ {g.rating}</p></div>
                <p className="text-sm font-semibold text-teal">${g.monthlyPrice}/mo</p>
              </div>
            ))}
          </div>
          <Link href="/search" className="block text-center text-sm text-teal font-semibold mt-4 hover:underline">Find more gyms →</Link>
        </div>
      </div>
    </DashboardShell>
  );
}