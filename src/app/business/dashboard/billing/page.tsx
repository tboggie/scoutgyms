import DashboardShell from '@/components/layout/DashboardShell';
import { MOCK_INVOICES } from '@/lib/mock-data';

export default function BillingPage() {
  return (
    <DashboardShell variant="business">
      <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Billing</h1>
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-card rounded-xl border border-border p-6"><h2 className="text-sm font-medium text-text3 mb-2">Current plan</h2><p className="font-[var(--font-display)] text-xl font-bold text-teal">Growth</p><p className="text-sm text-text2 mt-1">$22/seat/mo · 342 active seats</p><button className="mt-4 w-full text-center border border-teal text-teal py-2 rounded-lg text-sm font-semibold hover:bg-teal-light transition-colors">Change plan</button></div>
        <div className="bg-card rounded-xl border border-border p-6"><h2 className="text-sm font-medium text-text3 mb-2">Payment method</h2><div className="flex items-center gap-3 mt-1"><div className="w-10 h-7 rounded bg-blue-light flex items-center justify-center text-xs font-bold text-blue">VISA</div><span className="text-sm font-medium">•••• 4892</span></div><button className="mt-4 w-full text-center border border-border text-text2 py-2 rounded-lg text-sm font-semibold hover:border-teal transition-colors">Update</button></div>
        <div className="bg-card rounded-xl border border-border p-6"><h2 className="text-sm font-medium text-text3 mb-2">Next invoice</h2><p className="font-[var(--font-display)] text-xl font-bold">$7,524.00</p><p className="text-sm text-text3 mt-1">Due September 1, 2026</p></div>
      </div>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border"><h2 className="font-semibold">Invoice history</h2></div>
        <table className="w-full"><thead><tr className="border-b border-border">{['Period','Amount','Status',''].map(h=>(<th key={h} className="text-left p-4 text-xs font-semibold text-text3 uppercase">{h}</th>))}</tr></thead>
        <tbody>{MOCK_INVOICES.map(inv=>(<tr key={inv.id} className="border-b border-border last:border-none"><td className="p-4 text-sm font-medium">{inv.period}</td><td className="p-4 text-sm font-semibold">${inv.amount.toLocaleString()}</td><td className="p-4"><span className={`text-xs font-semibold px-2 py-1 rounded-full ${inv.status==='paid'?'bg-green-light text-green':'bg-amber-light text-amber'}`}>{inv.status}</span></td><td className="p-4 text-right"><button className="text-sm text-teal font-semibold">Download</button></td></tr>))}</tbody></table>
      </div>
    </DashboardShell>
  );
}