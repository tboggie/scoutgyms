import DashboardShell from '@/components/layout/DashboardShell';
import { MOCK_REFERRALS } from '@/lib/mock-data';

export default function EarningsPage() {
  const total = MOCK_REFERRALS.reduce((s,r)=>s+r.amount,0);
  const paid = MOCK_REFERRALS.filter(r=>r.status==='paid').reduce((s,r)=>s+r.amount,0);
  const pending = MOCK_REFERRALS.filter(r=>r.status==='pending').reduce((s,r)=>s+r.amount,0);

  return (
    <DashboardShell>
      <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Earnings</h1>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Total earned</p><p className="font-[var(--font-display)] text-3xl font-bold text-green">${total}</p></div>
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Paid out</p><p className="font-[var(--font-display)] text-3xl font-bold text-teal">${paid}</p></div>
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Pending</p><p className="font-[var(--font-display)] text-3xl font-bold text-amber">${pending}</p></div>
      </div>
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <h2 className="font-semibold mb-4">Payout method</h2>
        <div className="flex items-center justify-between p-4 bg-bg rounded-xl border border-border">
          <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center text-blue text-lg">💳</div><div><p className="text-sm font-medium">Bank account ••4892</p><p className="text-xs text-text3">Payouts every Friday</p></div></div>
          <button className="text-sm text-teal font-semibold">Change</button>
        </div>
      </div>
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="font-semibold mb-4">Payout history</h2>
        <div className="space-y-3">
          {[{d:'Aug 16, 2026',a:27,s:'paid'},{d:'Aug 9, 2026',a:15,s:'paid'},{d:'Aug 2, 2026',a:12,s:'paid'}].map(p=>(
            <div key={p.d} className="flex items-center justify-between py-3 border-b border-border last:border-none">
              <div><p className="text-sm font-medium">{p.d}</p><p className="text-xs text-text3">Bank transfer</p></div>
              <p className="text-sm font-semibold text-green">${p.a}.00</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}