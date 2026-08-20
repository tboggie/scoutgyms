import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ClaimPage() {
 return (<>
 <Navbar variant="partners" />
 <main className="pt-16 min-h-screen flex items-center justify-center px-6">
 <div className="w-full max-w-lg">
 <div className="text-center mb-8"><h1 className="font-[var(--font-display)] text-3xl font-bold tracking-tight mb-2">Claim your gym listing</h1><p className="text-text2">Search for your gym and verify ownership to manage your listing.</p></div>
 <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
 <div><label className="text-sm font-medium text-text2 block mb-1.5">Search for your gym</label><input placeholder="e.g. Iron Temple Beverly Hills" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
 <div className="space-y-2">{['Iron Temple - 123 Main St, Beverly Hills','Iron Temple - 456 Oak Ave, West Hollywood'].map(g=>(<button key={g} className="w-full text-left p-4 rounded-xl border border-border hover:border-teal hover:bg-teal-light transition-all text-sm font-medium">{g}</button>))}</div>
 <div className="border-t border-border pt-4"><p className="text-sm font-medium mb-3">Can&apos;t find your gym?</p><button className="w-full border border-teal text-teal py-3 rounded-xl font-semibold text-sm hover:bg-teal-light transition-colors">Add a new listing</button></div>
 </div>
 </div>
 </main>
 <Footer variant="partners" />
 </>);
}