import DashboardShell from '@/components/layout/DashboardShell';

export default function BusinessSettings() {
  return (
    <DashboardShell variant="business">
      <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Settings</h1>
      <div className="space-y-6 max-w-xl">
        <div className="bg-card rounded-xl border border-border p-6 space-y-4"><h2 className="font-semibold">Company profile</h2><div><label className="text-sm font-medium text-text2 block mb-1.5">Company name</label><input defaultValue="Acme Corp" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text"/></div><div><label className="text-sm font-medium text-text2 block mb-1.5">Domain</label><input defaultValue="acmecorp.com" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text"/></div><div><label className="text-sm font-medium text-text2 block mb-1.5">Billing email</label><input defaultValue="billing@acmecorp.com" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text"/></div><button className="bg-teal text-white px-5 py-2.5 rounded-lg text-sm font-semibold">Save changes</button></div>
        <div className="bg-card rounded-xl border border-border p-6"><h2 className="font-semibold mb-4">Integrations</h2>{['Okta SSO','BambooHR','Workday','Slack'].map(i=>(<div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-none"><span className="text-sm text-text2">{i}</span><button className="text-sm text-teal font-semibold">Connect</button></div>))}</div>
      </div>
    </DashboardShell>
  );
}