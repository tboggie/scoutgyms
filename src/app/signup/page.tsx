import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function SignupPage() {
 return (<>
 <Navbar />
 <main className="pt-16 min-h-screen flex items-center justify-center px-6">
 <div className="w-full max-w-md">
 <div className="text-center mb-8">
 <h1 className="font-[var(--font-display)] text-3xl font-bold tracking-tight mb-2">Create your account</h1>
 <p className="text-text2">Start finding and comparing gyms for free</p>
 </div>
 <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
 <button className="w-full flex items-center justify-center gap-3 border border-border rounded-xl px-4 py-3 text-sm font-medium hover:border-teal transition-colors">
 <span className="text-lg">G</span>Sign up with Google
 </button>
 <div className="flex items-center gap-3"><div className="flex-1 h-px bg-border"/><span className="text-xs text-text3">or</span><div className="flex-1 h-px bg-border"/></div>
 <div className="grid grid-cols-2 gap-3"><div><label className="text-sm font-medium text-text2 block mb-1.5">First name</label><input type="text" placeholder="Jake" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm outline-none focus:border-teal text-text"/></div><div><label className="text-sm font-medium text-text2 block mb-1.5">Last name</label><input type="text" placeholder="Mitchell" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm outline-none focus:border-teal text-text"/></div></div>
 <div><label className="text-sm font-medium text-text2 block mb-1.5">Email</label><input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm outline-none focus:border-teal text-text"/></div>
 <div><label className="text-sm font-medium text-text2 block mb-1.5">Zip code</label><input type="text" placeholder="90210" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm outline-none focus:border-teal text-text"/></div>
 <div><label className="text-sm font-medium text-text2 block mb-1.5">Password</label><input type="password" placeholder="Min 8 characters" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm outline-none focus:border-teal text-text"/></div>
 <button className="w-full bg-teal text-white py-3 rounded-xl font-semibold text-[15px] hover:bg-teal-dark transition-colors">Create account</button>
 <p className="text-xs text-text3 text-center">By signing up you agree to our <Link href="/terms" className="text-teal">Terms</Link> and <Link href="/privacy" className="text-teal">Privacy Policy</Link></p>
 </div>
 <p className="text-center text-sm text-text3 mt-6">Already have an account? <Link href="/login" className="text-teal font-semibold">Sign in</Link></p>
 </div>
 </main>
 </>);
}