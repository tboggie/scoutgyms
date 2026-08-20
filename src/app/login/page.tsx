import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function LoginPage() {
  return (<>
    <Navbar />
    <main className="pt-16 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-[var(--font-display)] text-3xl font-bold tracking-tight mb-2">Welcome back</h1>
          <p className="text-text2">Sign in to your ScoutGyms account</p>
        </div>
        <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
          <button className="w-full flex items-center justify-center gap-3 border border-border rounded-xl px-4 py-3 text-sm font-medium hover:border-teal transition-colors">
            <span className="text-lg">G</span>Continue with Google
          </button>
          <div className="flex items-center gap-3"><div className="flex-1 h-px bg-border"/><span className="text-xs text-text3">or</span><div className="flex-1 h-px bg-border"/></div>
          <div><label className="text-sm font-medium text-text2 block mb-1.5">Email</label><input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm outline-none focus:border-teal transition-colors text-text"/></div>
          <div><label className="text-sm font-medium text-text2 block mb-1.5">Password</label><input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm outline-none focus:border-teal transition-colors text-text"/></div>
          <div className="flex items-center justify-between"><label className="flex items-center gap-2 text-sm text-text2"><input type="checkbox" className="rounded"/>Remember me</label><Link href="/forgot-password" className="text-sm text-teal font-medium">Forgot password?</Link></div>
          <button className="w-full bg-teal text-white py-3 rounded-xl font-semibold text-[15px] hover:bg-teal-dark transition-colors">Sign in</button>
        </div>
        <p className="text-center text-sm text-text3 mt-6">Don&apos;t have an account? <Link href="/signup" className="text-teal font-semibold">Sign up free</Link></p>
      </div>
    </main>
  </>);
}