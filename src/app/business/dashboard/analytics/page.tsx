import DashboardShell from '@/components/layout/DashboardShell';
import { MOCK_CORPORATE_STATS } from '@/lib/mock-data';

export default function AnalyticsPage() {
 const s = MOCK_CORPORATE_STATS;
 return (
 <DashboardShell variant="business">
 <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Analytics</h1>
 <div className="grid sm:grid-cols-3 gap-4 mb-8">
 <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Utilisation rate</p><p className="font-[var(--font-display)] text-3xl font-bold text-green">{s.utilisationRate}%</p><p className="text-xs text-green mt-1">↑ 5% vs last month</p></div>
 <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Avg visits/member</p><p className="font-[var(--font-display)] text-3xl font-bold text-teal">3.6</p><p className="text-xs text-teal mt-1">↑ 0.4 vs last month</p></div>
 <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Monthly cost</p><p className="font-[var(--font-display)] text-3xl font-bold text-purple">$7,524</p><p className="text-xs text-text3 mt-1">${s.costPerMember}/member</p></div>
 </div>
 <div className="bg-card rounded-xl border border-border p-6 mb-6">
 <div className="flex items-center justify-between mb-4"><h2 className="font-semibold">Visit trends</h2><button className="text-sm text-teal font-semibold">Export CSV</button></div>
 <div className="flex items-end gap-2 h-40">{s.monthlyVisits.map((v,i)=>(<div key={i} className="flex-1 flex flex-col items-center gap-1"><div className="w-full bg-teal/70 hover:bg-teal rounded-t transition-colors" style={{height:`${(v/Math.max(...s.monthlyVisits))*100}%`}}/><span className="text-[10px] text-text3">{s.months[i]}</span></div>))}</div>
 </div>
 <div className="bg-card rounded-xl border border-border p-6"><h2 className="font-semibold mb-4">Utilisation by department</h2>{['Engineering','Design','Sales','Marketing','HR'].map(d=>(<div key={d} className="flex items-center justify-between py-3 border-b border-border last:border-none"><span className="text-sm text-text2">{d}</span><div className="flex items-center gap-3"><div className="w-32 h-2 rounded-full bg-border overflow-hidden"><div className="h-full rounded-full bg-teal" style={{width:`${60+Math.random()*35}%`}}/></div><span className="text-sm font-semibold w-10 text-right">{Math.floor(60+Math.random()*35)}%</span></div></div>))}</div>
 </DashboardShell>
 );
}