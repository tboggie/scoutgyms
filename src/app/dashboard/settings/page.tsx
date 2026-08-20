import DashboardShell from '@/components/layout/DashboardShell';

export default function SettingsPage() {
  return (
    <DashboardShell>
      <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Settings</h1>
      <div className="space-y-6 max-w-xl">
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          <h2 className="font-semibold">Profile</h2>
          <div className="grid grid-cols-2 gap-3"><div><label className="text-sm font-medium text-text2 block mb-1.5">First name</label><input defaultValue="Jake" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text"/></div><div><label className="text-sm font-medium text-text2 block mb-1.5">Last name</label><input defaultValue="Mitchell" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text"/></div></div>
          <div><label className="text-sm font-medium text-text2 block mb-1.5">Email</label><input defaultValue="jake@example.com" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text"/></div>
          <div><label className="text-sm font-medium text-text2 block mb-1.5">Zip code</label><input defaultValue="90210" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text"/></div>
          <button className="bg-teal text-white px-5 py-2.5 rounded-lg text-sm font-semibold">Save changes</button>
        </div>
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          <h2 className="font-semibold">Notifications</h2>
          {['Price drop alerts','Referral updates','Weekly digest','New gym openings'].map(n=>(<label key={n} className="flex items-center justify-between py-2"><span className="text-sm text-text2">{n}</span><input type="checkbox" defaultChecked className="rounded"/></label>))}
        </div>
        <div className="bg-card rounded-xl border border-red p-6">
          <h2 className="font-semibold text-red mb-2">Danger zone</h2>
          <p className="text-sm text-text2 mb-4">Permanently delete your account and all data.</p>
          <button className="bg-red text-white px-5 py-2.5 rounded-lg text-sm font-semibold">Delete account</button>
        </div>
      </div>
    </DashboardShell>
  );
}