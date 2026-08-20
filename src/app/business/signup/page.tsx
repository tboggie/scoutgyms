import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function BusinessSignup() {
  return (<>
    <Navbar variant="business" />
    <main className="pt-16 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8"><h1 className="font-[var(--font-display)] text-3xl font-bold tracking-tight mb-2">Start your free trial</h1><p className="text-text2">30 days free. No credit card required.</p></div>
        <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
          <div><label className="text-sm font-medium text-text2 block mb-1.5">Company name</label><input placeholder="Acme Corp" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
          <div className="grid grid-cols-2 gap-3"><div><label className="text-sm font-medium text-text2 block mb-1.5">Your name</label><input placeholder="Karen Rodriguez" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div><div><label className="text-sm font-medium text-text2 block mb-1.5">Job title</label><input placeholder="VP of People" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div></div>
          <div><label className="text-sm font-medium text-text2 block mb-1.5">Work email</label><input type="email" placeholder="karen@acmecorp.com" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
          <div><label className="text-sm font-medium text-text2 block mb-1.5">Company size</label><select className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text2"><option>10-50 employees</option><option>51-200 employees</option><option>201-500 employees</option><option>500+ employees</option></select></div>
          <div><label className="text-sm font-medium text-text2 block mb-1.5">Password</label><input type="password" placeholder="Min 8 characters" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
          <button className="w-full bg-teal text-white py-3 rounded-xl font-semibold text-[15px] hover:bg-teal-dark transition-colors">Start free trial</button>
          <p className="text-xs text-text3 text-center">By signing up you agree to our <Link href="/terms" className="text-teal">Terms</Link> and <Link href="/privacy" className="text-teal">Privacy Policy</Link></p>
        </div>
      </div>
    </main>
  </>);
}