'use client';
import DashboardShell from '@/components/layout/DashboardShell';
import { useState } from 'react';

const partnerships = [
  { company: 'Acme Corp', members: 87, rate: 29, visits: 342, since: 'Jan 2026' },
  { company: 'TechStart Inc', members: 34, rate: 29, visits: 128, since: 'Mar 2026' },
  { company: 'HealthFirst', members: 12, rate: 32, visits: 45, since: 'Jun 2026' },
];

const requests = [
  { company: 'GlobalMedia', employees: 250, proposed: 28, date: 'Aug 14, 2026' },
  { company: 'DataFlow Systems', employees: 85, proposed: 30, date: 'Aug 10, 2026' },
];

export default function CorporatePage() {
  const [rate, setRate] = useState('29');
  const totalMembers = partnerships.reduce((s, p) => s + p.members, 0);
  const totalRevenue = partnerships.reduce((s, p) => s + (p.members * p.rate), 0);

  return (
    <DashboardShell variant="partners">
      <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Corporate partnerships</h1>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Corporate members</p><p className="font-[var(--font-display)] text-2xl font-bold text-teal">{totalMembers}</p></div>
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Monthly revenue</p><p className="font-[var(--font-display)] text-2xl font-bold text-green">${totalRevenue.toLocaleString()}</p></div>
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Active partnerships</p><p className="font-[var(--font-display)] text-2xl font-bold text-purple">{partnerships.length}</p></div>
      </div>

      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <h2 className="font-semibold mb-2">Your corporate rate</h2>
        <p className="text-sm text-text2 mb-4">Set a discounted rate for employees of partner companies.</p>
        <div className="flex items-center gap-4">
          <div>
            <label className="text-sm font-medium text-text2 block mb-1.5">Corporate monthly rate</label>
            <div className="flex items-center gap-2"><span className="text-text3">$</span><input value={rate} onChange={e => setRate(e.target.value)} className="px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text w-24"/><span className="text-sm text-text3">/month</span></div>
          </div>
          <div className="mt-6"><p className="text-sm text-text3">Public rate: $39/mo ({Math.round((1 - parseInt(rate || '0') / 39) * 100)}% discount)</p></div>
        </div>
        <button className="mt-4 bg-teal text-white px-5 py-2.5 rounded-lg text-sm font-semibold">Update rate</button>
      </div>

      {requests.length > 0 && (
        <div className="bg-card rounded-xl border border-amber/30 p-6 mb-6">
          <h2 className="font-semibold mb-4">Pending partnership requests</h2>
          {requests.map(r => (
            <div key={r.company} className="flex items-center justify-between py-3 border-b border-border last:border-none">
              <div><p className="text-sm font-medium">{r.company}</p><p className="text-xs text-text3">{r.employees} employees · Proposed ${r.proposed}/mo · {r.date}</p></div>
              <div className="flex gap-2"><button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal text-white">Accept</button><button className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-border text-text2">Negotiate</button></div>
            </div>
          ))}
        </div>
      )}

      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="font-semibold mb-4">Active partnerships</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead><tr className="border-b border-border">{['Company','Members','Rate','Monthly visits','Since'].map(h=><th key={h} className="text-left p-3 text-xs font-semibold text-text3 uppercase">{h}</th>)}</tr></thead>
            <tbody>{partnerships.map(p=>(
              <tr key={p.company} className="border-b border-border last:border-none">
                <td className="p-3 text-sm font-medium">{p.company}</td>
                <td className="p-3 text-sm text-text2">{p.members}</td>
                <td className="p-3 text-sm font-medium text-teal">${p.rate}/mo</td>
                <td className="p-3 text-sm text-text2">{p.visits}</td>
                <td className="p-3 text-sm text-text3">{p.since}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
