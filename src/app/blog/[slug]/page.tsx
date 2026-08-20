import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function BlogPost() {
  return (<><Navbar /><main className="pt-16 min-h-screen"><div className="max-w-[700px] mx-auto px-6 py-16">
    <Link href="/blog" className="text-sm text-teal font-semibold mb-4 inline-block">← Back to blog</Link>
    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-light text-teal-dark">City guide</span>
    <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4">Best gyms in Los Angeles: A complete guide for 2026</h1>
    <p className="text-sm text-text3 mb-8">August 15, 2026 · 8 min read</p>
    <div className="prose space-y-4 text-text2 leading-relaxed text-[15px]">
      <p>Los Angeles has over 2,000 gyms, making it one of the most competitive fitness markets in the country. Whether you&apos;re looking for a budget-friendly 24/7 gym or a premium boutique studio, this guide breaks down the best options by neighbourhood.</p>
      <h2 className="text-xl font-semibold text-text">Best overall: Iron Temple</h2>
      <p>Located in Beverly Hills, Iron Temple consistently ranks as one of the top-rated gyms in LA. With 24/7 access, a massive free weights area, and no joining fee, it&apos;s hard to beat at $39/month.</p>
      <h2 className="text-xl font-semibold text-text">Best value: FitLife 24/7</h2>
      <p>At $29/month, FitLife offers the most bang for your buck. The 12-month contract is a downside, but the equipment and 24/7 access make up for it.</p>
      <h2 className="text-xl font-semibold text-text">Best premium: Peak Athletics</h2>
      <p>If budget isn&apos;t a concern, Peak Athletics in Santa Monica is the gold standard. Pool, sauna, 20+ classes per week, and a 4.9 rating from 98 reviews.</p>
      <div className="bg-teal-light rounded-xl p-6 mt-8"><p className="text-sm font-semibold text-teal-dark mb-2">Compare these gyms yourself</p><p className="text-sm text-teal-dark/80">Use ScoutGyms to search any LA zip code and compare gyms side by side on price, equipment, classes and reviews.</p><Link href="/search?zip=90210" className="inline-block mt-3 bg-teal text-white px-5 py-2 rounded-lg text-sm font-semibold">Search LA gyms →</Link></div>
    </div>
  </div></main><Footer /></>);
}