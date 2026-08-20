import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [{s:'best-gyms-los-angeles',t:'Best gyms in Los Angeles: A complete guide for 2026',d:'We compared 200+ gyms across LA to find the best options for every budget and goal.',tag:'City guide',date:'Aug 15, 2026'},{s:'gym-membership-save-money',t:'How to save money on your gym membership',d:'7 strategies to cut your gym costs without sacrificing quality.',tag:'Tips',date:'Aug 10, 2026'},{s:'corporate-wellness-roi',t:'The ROI of corporate wellness programs in 2026',d:'New data shows companies with gym benefits see 31% lower absenteeism.',tag:'Business',date:'Aug 5, 2026'},{s:'home-gym-vs-membership',t:'Home gym vs gym membership: Which is right for you?',d:'An honest breakdown of costs, pros and cons.',tag:'Comparison',date:'Jul 28, 2026'}];
  return (<><Navbar /><main className="pt-16 min-h-screen"><div className="max-w-[900px] mx-auto px-6 py-16">
    <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-2">Blog</h1><p className="text-text2 mb-10">Guides, tips and insights on finding the right gym.</p>
    <div className="space-y-6">{posts.map(p=>(<Link key={p.s} href={`/blog/${p.s}`} className="block bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"><span className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-light text-teal-dark">{p.tag}</span><h2 className="text-xl font-semibold mt-3 mb-2">{p.t}</h2><p className="text-sm text-text2 mb-2">{p.d}</p><p className="text-xs text-text3">{p.date}</p></Link>))}</div>
  </div></main><Footer /></>);
}