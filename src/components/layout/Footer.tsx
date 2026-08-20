import Link from 'next/link';

export default function Footer({ variant = 'consumer' }: { variant?: 'consumer' | 'business' | 'partners' }) {
 return (
 <footer className="border-t border-border py-12">
 <div className="max-w-[1140px] mx-auto px-6">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
 <div>
 <span className="font-[var(--font-display)] font-extrabold text-xl text-teal">Scout<span className="text-text">Gyms</span></span>
 <p className="text-sm text-text3 mt-3 leading-relaxed max-w-[280px]">The free gym comparison platform. Find, compare and earn across the USA.</p>
 </div>
 <div>
 <h4 className="text-xs font-semibold uppercase tracking-wider text-text3 mb-4">Product</h4>
 <div className="flex flex-col gap-2.5">
 <Link href="/search" className="text-sm text-text2 hover:text-teal transition-colors">Search gyms</Link>
 <Link href="/compare" className="text-sm text-text2 hover:text-teal transition-colors">Compare</Link>
 <Link href="/quiz" className="text-sm text-text2 hover:text-teal transition-colors">Smart match</Link>
 <Link href="/dashboard/referrals" className="text-sm text-text2 hover:text-teal transition-colors">Referral program</Link>
 </div>
 </div>
 <div>
 <h4 className="text-xs font-semibold uppercase tracking-wider text-text3 mb-4">For business</h4>
 <div className="flex flex-col gap-2.5">
 <Link href="/business" className="text-sm text-text2 hover:text-teal transition-colors">Corporate wellness</Link>
 <Link href="/business/pricing" className="text-sm text-text2 hover:text-teal transition-colors">Pricing</Link>
 <Link href="/partners" className="text-sm text-text2 hover:text-teal transition-colors">Gym partners</Link>
 <Link href="/partners/claim" className="text-sm text-text2 hover:text-teal transition-colors">Claim listing</Link>
 </div>
 </div>
 <div>
 <h4 className="text-xs font-semibold uppercase tracking-wider text-text3 mb-4">Company</h4>
 <div className="flex flex-col gap-2.5">
 <Link href="/about" className="text-sm text-text2 hover:text-teal transition-colors">About</Link>
 <Link href="/blog" className="text-sm text-text2 hover:text-teal transition-colors">Blog</Link>
 <Link href="/contact" className="text-sm text-text2 hover:text-teal transition-colors">Contact</Link>
 <Link href="/privacy" className="text-sm text-text2 hover:text-teal transition-colors">Privacy</Link>
 <Link href="/terms" className="text-sm text-text2 hover:text-teal transition-colors">Terms</Link>
 </div>
 </div>
 </div>
 <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border text-xs text-text3 gap-2">
 <span>© 2026 ScoutGyms. All rights reserved.</span>
 <span>Made with care in the USA</span>
 </div>
 </div>
 </footer>
 );
}
