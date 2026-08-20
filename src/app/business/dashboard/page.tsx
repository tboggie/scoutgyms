import DashboardShell from '@/components/layout/DashboardShell';
import { MOCK_CORPORATE_STATS } from '@/lib/mock-data';

export default function CorporateDashboard() {
 const s = MOCK_CORPORATE_STATS;
 return (
 <DashboardShell variant="business">
 <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Corporate dashboard</h1>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
 {[{l:'Active members',v:String(s.activeMembers),c:'text-teal'},{l:'Utilisation',v:`${s.utilisationRate}%`,c:'text-green'},{l:'Visits this month',v:s.visitsThisMonth.toLocaleString(),c:'text-purple'},{l:'Cost per member',v:`$${s.costPerMember}`,c:'text-amber'}].map(m=>(
 <div key={m.l} className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">{m.l}</p><p className={`font-[var(--font-display)] text-2xl font-bold ${m.c}`}>{m.v}</p></div>
 ))}
 </div>
 <div className="grid lg:grid-cols-2 gap-6">
 <div className="bg-card rounded-xl border border-border p-6">
 <h2 className="font-semibold mb-4">Monthly visits</h2>
 <div className="flex items-end gap-2 h-32">
 {s.monthlyVisits.map((v,i)=>(<div key={i} className="flex-1 bg-teal/70 hover:bg-teal rounded-t transition-colors" style={{height:`${(v/Math.max(...s.monthlyVisits))*100}%`}} title={`${s.months[i]}: ${v}`}/>))}
 </div>
 <div className="flex justify-between mt-2 text-[10px] text-text3">{s.months.map(m=>(<span key={m}>{m}</span>))}</div>
 </div>
 <div className="bg-card rounded-xl border border-border p-6">
 <h2 className="font-semibold mb-4">Top gyms by members</h2>
 <div className="space-y-3">{s.topGyms.map(g=>(<div key={g.name} className="flex items-center justify-between"><span className="text-sm text-text2">{g.name}</span><div className="flex items-center gap-3"><div className="w-24 h-2 rounded-full bg-border overflow-hidden"><div className="h-full rounded-full bg-teal" style={{width:`${(g.members/s.topGyms[0].members)*100}%`}}/></div><span className="text-sm font-semibold w-8 text-right">{g.members}</span></div></div>))}</div>
 </div>
 </div>
 </DashboardShell>
 );
}