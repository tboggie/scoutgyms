import DashboardShell from '@/components/layout/DashboardShell';
import { MOCK_GYMS } from '@/lib/mock-data';

export default function AlertsPage() {
 return (
 <DashboardShell>
 <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-2">Price alerts</h1>
 <p className="text-text2 mb-6">Get notified when your watched gyms drop their prices.</p>
 <div className="space-y-4">
 {MOCK_GYMS.slice(0,2).map(g=>(
 <div key={g.id} className="bg-card rounded-xl border border-border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
 <div><p className="text-base font-semibold">{g.name}</p><p className="text-sm text-text3">Current: ${g.monthlyPrice}/mo · Alert when below ${g.monthlyPrice-5}/mo</p></div>
 <div className="flex items-center gap-2"><span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-light text-green">Active</span><button className="text-sm text-red font-medium">Remove</button></div>
 </div>
 ))}
 </div>
 </DashboardShell>
 );
}