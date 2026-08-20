import DashboardShell from '@/components/layout/DashboardShell';
import { MOCK_REVIEWS } from '@/lib/mock-data';

export default function ReviewsPage() {
  return (
    <DashboardShell variant="partners">
      <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Reviews</h1>
      <div className="space-y-4">{MOCK_REVIEWS.filter(r=>r.gymId==='1').map(r=>(<div key={r.id} className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center text-white text-xs font-semibold">{r.userName.charAt(0)}</div><span className="text-sm font-semibold">{r.userName}</span>{r.verified&&<span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-green-light text-green">Verified</span>}</div><div className="text-sm text-amber">{'⭐'.repeat(r.rating)}</div></div>
        <p className="text-sm text-text2 leading-relaxed mb-3">{r.body}</p>
        <div className="flex items-center justify-between"><span className="text-xs text-text3">{r.date}</span><button className="text-sm text-teal font-semibold">Reply</button></div>
      </div>))}</div>
    </DashboardShell>
  );
}