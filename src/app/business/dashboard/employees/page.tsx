import DashboardShell from '@/components/layout/DashboardShell';
import Link from 'next/link';
import { MOCK_EMPLOYEES } from '@/lib/mock-data';

export default function EmployeesPage() {
  return (
    <DashboardShell variant="business">
      <div className="flex items-center justify-between mb-6"><h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight">Employees</h1><Link href="/business/dashboard/invite" className="bg-teal text-white px-4 py-2 rounded-lg text-sm font-semibold">+ Invite employees</Link></div>
      <div className="bg-card rounded-xl border border-border overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead><tr className="border-b border-border">{['Name','Email','Gym','Status','Visits'].map(h=>(<th key={h} className="text-left p-4 text-xs font-semibold text-text3 uppercase">{h}</th>))}</tr></thead>
          <tbody>{MOCK_EMPLOYEES.map(e=>(<tr key={e.id} className="border-b border-border last:border-none hover:bg-bg2"><td className="p-4 text-sm font-medium">{e.name}</td><td className="p-4 text-sm text-text2">{e.email}</td><td className="p-4 text-sm text-text2">{e.gym||'—'}</td><td className="p-4"><span className={`text-xs font-semibold px-2 py-1 rounded-full ${e.status==='active'?'bg-green-light text-green':e.status==='pending'?'bg-amber-light text-amber':'bg-blue-light text-blue'}`}>{e.status}</span></td><td className="p-4 text-sm text-text2">{e.visits}</td></tr>))}</tbody>
        </table>
      </div>
    </DashboardShell>
  );
}