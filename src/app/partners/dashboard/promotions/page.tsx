'use client';
import DashboardShell from '@/components/layout/DashboardShell';
import { useState } from 'react';

const promos = [
  { name: 'Summer Special', desc: 'First month free for new members', start: 'Aug 1', end: 'Aug 31', status: 'active', views: 847, redemptions: 12 },
  { name: 'Free Trial Week', desc: '7-day free pass for anyone', start: 'Jul 1', end: 'Jul 7', status: 'ended', views: 1203, redemptions: 34 },
  { name: 'Student Discount', desc: '20% off with valid student ID', start: 'Jun 15', end: 'Sep 15', status: 'active', views: 562, redemptions: 8 },
];

export default function PromotionsPage() {
  const [showNew, setShowNew] = useState(false);
  return (
    <DashboardShell variant="partners">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight">Promotions</h1>
        <button onClick={() => setShowNew(!showNew)} className="bg-teal text-white px-4 py-2 rounded-lg text-sm font-semibold">+ Create promotion</button>
      </div>

      {showNew && (
        <div className="bg-card rounded-xl border border-border p-6 mb-6 space-y-4">
          <h2 className="font-semibold">New promotion</h2>
          <div><label className="text-sm font-medium text-text2 block mb-1.5">Promotion name</label><input placeholder="e.g. Back to School Special" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
          <div><label className="text-sm font-medium text-text2 block mb-1.5">Description</label><input placeholder="e.g. First month free for new members" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="text-sm font-medium text-text2 block mb-1.5">Start date</label><input type="date" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
            <div><label className="text-sm font-medium text-text2 block mb-1.5">End date</label><input type="date" className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
          </div>
          <div className="flex gap-2"><button className="bg-teal text-white px-5 py-2.5 rounded-lg text-sm font-semibold">Create</button><button onClick={() => setShowNew(false)} className="border border-border text-text2 px-5 py-2.5 rounded-lg text-sm font-semibold">Cancel</button></div>
        </div>
      )}

      <div className="space-y-4">
        {promos.map(p => (
          <div key={p.name} className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold">{p.name}</h2>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.status === 'active' ? 'bg-green-light text-green' : 'bg-border text-text3'}`}>{p.status === 'active' ? 'Active' : 'Ended'}</span>
            </div>
            <p className="text-sm text-text2 mb-3">{p.desc} · {p.start} - {p.end}</p>
            <div className="flex gap-6">
              <div><span className="text-xs text-text3">Views</span><p className="text-sm font-semibold">{p.views.toLocaleString()}</p></div>
              <div><span className="text-xs text-text3">Redemptions</span><p className="text-sm font-semibold">{p.redemptions}</p></div>
              <div><span className="text-xs text-text3">Conversion</span><p className="text-sm font-semibold">{((p.redemptions/p.views)*100).toFixed(1)}%</p></div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
