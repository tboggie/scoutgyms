import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function Home() {
 return (<>
 <Navbar />
 <main>
 {/* HERO */}
 <section className="pt-36 pb-20 relative overflow-hidden">
 <div className="absolute top-0 right-[-200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(11,125,142,0.06)_0%,transparent_70%)] pointer-events-none" />
 <div className="max-w-[1140px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
 <div>
 <div className="inline-flex items-center gap-2 bg-teal-light text-teal-dark text-[13px] font-semibold px-4 py-1.5 rounded-full mb-5">
 <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />Now live across the USA
 </div>
 <h1 className="font-[var(--font-display)] text-4xl md:text-[52px] font-extrabold leading-[1.08] tracking-tight mb-5">
 Find your <em className="not-italic text-teal">perfect gym</em> by zip code
 </h1>
 <p className="text-lg text-text2 leading-relaxed mb-8 max-w-[480px]">Search any US zip code, compare gyms side by side on price, equipment, classes and reviews, then earn cash when you refer friends.</p>
 <div className="flex bg-card border-2 border-border rounded-[14px] overflow-hidden max-w-[480px] focus-within:border-teal focus-within:shadow-[0_0_0_4px_rgba(11,125,142,0.1)] transition-all">
 <input type="text" placeholder="Enter your zip code (e.g. 90210)" className="flex-1 px-5 py-4 border-none outline-none text-base bg-transparent text-text placeholder:text-text3" />
 <Link href="/search?zip=90210" className="m-1.5 px-7 py-3 bg-teal text-white rounded-[10px] font-semibold text-[15px] hover:bg-teal-dark transition-colors whitespace-nowrap flex items-center">Scout gyms</Link>
 </div>
 <div className="flex gap-8 mt-8">
 <div><strong className="font-[var(--font-display)] text-2xl md:text-[28px] font-bold tracking-tight">28,000+</strong><br/><span className="text-[13px] text-text3 font-medium">Gyms listed</span></div>
 <div><strong className="font-[var(--font-display)] text-2xl md:text-[28px] font-bold tracking-tight">4,200+</strong><br/><span className="text-[13px] text-text3 font-medium">Cities covered</span></div>
 <div><strong className="font-[var(--font-display)] text-2xl md:text-[28px] font-bold tracking-tight">$1.2M+</strong><br/><span className="text-[13px] text-text3 font-medium">Referrals paid</span></div>
 </div>
 </div>
 <div className="relative">
 <div className="bg-card rounded-2xl border border-border p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
 <div className="flex items-center justify-between mb-4"><h3 className="text-[15px] font-semibold">Comparing 3 gyms near 90210</h3><span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-green-light text-green">Best match</span></div>
 <div className="flex flex-col sm:flex-row gap-3">
 {[{n:'Iron Temple',p:'$39',r:'4.8',w:92,c:'bg-green'},{n:'FitLife 24/7',p:'$29',r:'4.2',w:78,c:'bg-teal'},{n:'Peak Athletics',p:'$59',r:'4.9',w:96,c:'bg-amber'}].map(g=>(
 <div key={g.n} className="flex-1 bg-bg rounded-[10px] p-3.5 border border-border">
 <div className="text-[13px] font-semibold">{g.n}</div>
 <div className="text-xl font-bold text-teal font-[var(--font-display)]">{g.p}<span className="text-xs text-text3 font-normal">/mo</span></div>
 <div className="flex items-center gap-1 mt-1 text-xs text-text3"><span className="text-amber">★★★★★</span>{g.r}</div>
 <div className="h-1 rounded bg-border mt-2 overflow-hidden"><div className={`h-full rounded ${g.c}`} style={{width:`${g.w}%`}} /></div>
 </div>
 ))}
 </div>
 </div>
 <div className="hidden md:flex absolute -top-2.5 -right-5 bg-card rounded-xl border border-border px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] items-center gap-2 text-green text-[13px] font-medium">
 <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-base font-bold">$</div>
 <div><strong>+$15 earned</strong><br/><span className="text-xs text-text3">From your referral</span></div>
 </div>
 </div>
 </div>
 </section>

 {/* HOW IT WORKS */}
 <section className="py-20 bg-bg2" id="how">
 <div className="max-w-[1140px] mx-auto px-6">
 <p className="text-[13px] font-semibold text-teal uppercase tracking-[1.5px] mb-3">How it works</p>
 <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-3">Three steps to your ideal gym</h2>
 <p className="text-[17px] text-text2 max-w-[520px] mb-12">No memberships to buy, no credit card needed. Just search, compare and go.</p>
 <div className="grid md:grid-cols-3 gap-6">
 {[{n:'1',t:'Enter your zip code',d:'Type any US zip code or allow location access. We show every gym within your chosen radius.',bg:'bg-teal-light',tc:'text-teal-dark'},
 {n:'2',t:'Compare side by side',d:'Stack up to 3 gyms on price, equipment, classes, hours, parking and reviews.',bg:'bg-purple-light',tc:'text-purple'},
 {n:'3',t:'Visit and earn',d:'Sign up through ScoutGyms and earn a referral bonus. Share your link for more cash back.',bg:'bg-green-light',tc:'text-green'}
 ].map(s=>(
 <div key={s.n} className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all">
 <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center font-[var(--font-display)] font-bold text-base mb-4 ${s.bg} ${s.tc}`}>{s.n}</div>
 <h3 className="text-[17px] font-semibold mb-2">{s.t}</h3>
 <p className="text-sm text-text2 leading-relaxed">{s.d}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FEATURES */}
 <section className="py-20" id="features">
 <div className="max-w-[1140px] mx-auto px-6">
 <p className="text-[13px] font-semibold text-teal uppercase tracking-[1.5px] mb-3">Features</p>
 <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-3">Everything you need to choose right</h2>
 <p className="text-[17px] text-text2 max-w-[520px] mb-12">Built for gym-goers who want transparency, not sales pitches.</p>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
 {[{i:'P',t:'Zip code search',d:'Find every gym near any US zip code with adjustable radius from 1 to 25 miles.',bg:'bg-teal-light',tc:'text-teal'},
 {i:'C',t:'Side-by-side comparison',d:'Compare up to 3 gyms across 15+ data points including cost, equipment and classes.',bg:'bg-blue-light',tc:'text-blue'},
 {i:'$',t:'Referral earnings',d:'Earn $10-25 for every friend who signs up through your personal referral link.',bg:'bg-green-light',tc:'text-green'},
 {i:'R',t:'Verified reviews',d:'Only members who have actually visited can leave reviews. No fake reviews.',bg:'bg-amber-light',tc:'text-amber'},
 {i:'Ph',t:'Member photos',d:'See real photos uploaded by actual gym members, not polished marketing shots.',bg:'bg-purple-light',tc:'text-purple'},
 {i:'H',t:'Peak hours data',d:'See when each gym is busiest so you can plan your visit around quieter times.',bg:'bg-coral-light',tc:'text-coral'},
 {i:'Q',t:'Smart match quiz',d:'Answer 5 quick questions. We rank gyms by how well they fit your needs.',bg:'bg-red-light',tc:'text-red'},
 {i:'A',t:'Price drop alerts',d:'Get notified when gyms run promotions, drop prices or waive joining fees.',bg:'bg-teal-light',tc:'text-teal'},
 {i:'T',t:'Trial pass booking',d:'Book a free or discounted trial session directly through the app.',bg:'bg-blue-light',tc:'text-blue'}
 ].map(f=>(
 <div key={f.t} className="bg-card rounded-[14px] border border-border p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all">
 <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-4 ${f.bg}`}>{f.i}</div>
 <h3 className="text-base font-semibold mb-1.5">{f.t}</h3>
 <p className="text-sm text-text2 leading-relaxed">{f.d}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20">
 <div className="max-w-[1140px] mx-auto px-6">
 <div className="bg-teal rounded-[20px] p-10 md:p-16 text-center relative overflow-hidden">
 <div className="absolute top-[-50%] right-[-20%] w-[400px] h-[400px] rounded-full bg-white/5" />
 <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 relative z-10">Stop guessing, start scouting</h2>
 <p className="text-[17px] text-white/80 mb-8 relative z-10">Join thousands of gym-goers who found their perfect gym and earned money doing it.</p>
 <div className="flex gap-3 justify-center flex-wrap relative z-10">
 <Link href="/search" className="px-8 py-3.5 rounded-[10px] bg-white text-teal-dark font-semibold text-[15px] hover:bg-white/90 transition-colors">Find gyms near me ↗</Link>
 <Link href="/business" className="px-8 py-3.5 rounded-[10px] bg-white/15 text-white font-semibold text-[15px] border border-white/25 hover:bg-white/25 transition-colors">For business</Link>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>);
}