import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (<>
    <Navbar />
    <main className="pt-16 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-[var(--font-display)] text-3xl font-bold tracking-tight mb-2">Reset your password</h1>
          <p className="text-text2">Enter your email and we&apos;ll send you a reset link</p>
        </div>
        <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
          <div><label className="text-sm font-medium text-text2 block mb-1.5">Email</label><input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm outline-none focus:border-teal text-text"/></div>
          <button className="w-full bg-teal text-white py-3 rounded-xl font-semibold text-[15px] hover:bg-teal-dark transition-colors">Send reset link</button>
        </div>
        <p className="text-center text-sm text-text3 mt-6">Remember your password? <Link href="/login" className="text-teal font-semibold">Sign in</Link></p>
      </div>
    </main>
  </>);
}