import DashboardShell from '@/components/layout/DashboardShell';

export default function InvitePage() {
  return (
    <DashboardShell variant="business">
      <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Invite employees</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-semibold mb-4">Invite by email</h2>
          <div className="space-y-3">
            {[1,2,3].map(i=>(<input key={i} placeholder="employee@company.com" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/>))}
            <button className="text-sm text-teal font-semibold">+ Add another</button>
          </div>
          <button className="mt-4 w-full bg-teal text-white py-3 rounded-xl font-semibold text-sm">Send invites</button>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-semibold mb-4">Bulk import</h2>
          <div className="border-2 border-dashed border-border rounded-xl p-10 text-center">
            <p className="text-3xl mb-3">📄</p>
            <p className="text-sm font-medium mb-1">Upload a CSV file</p>
            <p className="text-xs text-text3 mb-4">One email per row. Max 500 at a time.</p>
            <button className="bg-bg border border-border px-4 py-2 rounded-lg text-sm font-medium text-text2">Choose file</button>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-teal-light"><p className="text-xs text-teal-dark font-medium">💡 You can also connect your HRIS (BambooHR, Workday, Rippling) from Settings for automatic sync.</p></div>
        </div>
      </div>
    </DashboardShell>
  );
}