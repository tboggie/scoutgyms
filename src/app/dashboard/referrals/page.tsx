import DashboardShell from '@/components/layout/DashboardShell';
import { MOCK_REFERRALS } from '@/lib/mock-data';

export default function ReferralsPage() {
 return (
 <DashboardShell>
 <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-2">Referrals</h1>
 <p className="text-text2 mb-6">Share your link and earn money for every friend who joins a gym.</p>
 <div className="bg-card rounded-xl border border-border p-6 mb-6">
 <p className="text-sm font-medium text-text2 mb-2">Your referral link</p>
 <div className="flex gap-2"><input readOnly value="https://scoutgyms.com/r/jake-m-28f3" className="flex-1 bg-bg border border-border rounded-lg px-4 py-2.5 text-sm text-text"/><button className="bg-teal text-white px-5 py-2.5 rounded-lg text-sm font-semibold">Copy</button></div>
 </div>
 <div className="bg-card rounded-xl border border-border overflow-hidden">
 <table className="w-full">
 <thead><tr className="border-b border-border"><th className="text-left p-4 text-xs font-semibold text-text3 uppercase">Person</th><th className="text-left p-4 text-xs font-semibold text-text3 uppercase">Gym</th><th className="text-left p-4 text-xs font-semibold text-text3 uppercase">Date</th><th className="text-left p-4 text-xs font-semibold text-text3 uppercase">Status</th><th className="text-right p-4 text-xs font-semibold text-text3 uppercase">Earned</th></tr></thead>
 <tbody>{MOCK_REFERRALS.map(r=>(<tr key={r.id} className="border-b border-border last:border-none"><td className="p-4 text-sm font-medium">{r.refereeName}</td><td className="p-4 text-sm text-text2">{r.gym}</td><td className="p-4 text-sm text-text3">{r.date}</td><td className="p-4"><span className={`text-xs font-semibold px-2 py-1 rounded-full ${r.status==='paid'?'bg-green-light text-green':r.status==='recurring'?'bg-blue-light text-blue':'bg-amber-light text-amber'}`}>{r.status}</span></td><td className="p-4 text-right text-sm font-semibold text-green">+${r.amount}</td></tr>))}</tbody>
 </table>
 </div>
 </DashboardShell>
 );
}