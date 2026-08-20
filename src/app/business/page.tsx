import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function BusinessPage() {
 return (<>
 <Navbar variant="business" />
 <main>
 <section className="pt-36 pb-20 text-center relative overflow-hidden">
 <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(11,125,142,0.05)_0%,transparent_60%)] pointer-events-none"/>
 <div className="max-w-[1140px] mx-auto px-6">
 <div className="inline-flex items-center gap-2 bg-teal-light text-teal-dark text-[13px] font-semibold px-4 py-1.5 rounded-full mb-5">Corporate wellness, reimagined</div>
 <h1 className="font-[var(--font-display)] text-4xl md:text-[52px] font-extrabold leading-[1.08] tracking-tight mb-5 max-w-[800px] mx-auto">Your employees pick the gym.<br/>You pick the <em className="not-italic text-teal">savings</em>.</h1>
 <p className="text-lg text-text2 max-w-[600px] mx-auto mb-9 leading-relaxed">Give your team access to 28,000+ gyms across the USA at negotiated corporate rates. One platform, one invoice, total visibility.</p>
 <div className="flex gap-3 justify-center flex-wrap"><Link href="/business/signup" className="px-8 py-3.5 rounded-[10px] bg-teal text-white font-semibold text-[15px] hover:bg-teal-dark transition-colors">Book a demo ↗</Link><Link href="/business/pricing" className="px-8 py-3.5 rounded-[10px] bg-card text-text font-semibold text-[15px] border border-border hover:border-teal transition-colors">See pricing</Link></div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-[800px] mx-auto">
 {[{n:'28K+',l:'Partner gyms',c:'text-teal'},{n:'73%',l:'Employee utilisation',c:'text-green'},{n:'31%',l:'Lower absenteeism',c:'text-purple'},{n:'4.2x',l:'Average ROI',c:'text-amber'}].map(m=>(
 <div key={m.l} className="bg-card border border-border rounded-[14px] p-6 shadow-sm"><div className={`font-[var(--font-display)] text-3xl font-extrabold ${m.c}`}>{m.n}</div><div className="text-[13px] text-text3 mt-1 font-medium">{m.l}</div></div>
 ))}
 </div>
 </div>
 </section>

 <section className="py-20 bg-bg2">
 <div className="max-w-[1140px] mx-auto px-6">
 <p className="text-[13px] font-semibold text-teal uppercase tracking-[1.5px] mb-3 text-center">Platform features</p>
 <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Built for HR teams, loved by employees</h2>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
 {[{i:'N',t:'Full gym network access',d:'28,000+ gyms from budget chains to boutique studios.',bg:'bg-teal-light'},{i:'D',t:'Real-time HR dashboard',d:'Utilisation by office, cost per employee, engagement trends.',bg:'bg-blue-light'},{i:'I',t:'Single consolidated invoice',d:'One invoice per month covers every employee across every gym.',bg:'bg-green-light'},{i:'S',t:'Self-serve employee portal',d:'Employees search, compare and join gyms on their own.',bg:'bg-purple-light'},{i:'SS',t:'SSO and HRIS integration',d:'Connect with Okta, Azure AD, BambooHR, Workday and more.',bg:'bg-amber-light'},{i:'W',t:'Wellness challenges',d:'Run company-wide fitness challenges with leaderboards.',bg:'bg-coral-light'}].map(f=>(
 <div key={f.t} className="bg-card rounded-[14px] border border-border p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all"><div className={`w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-4 ${f.bg}`}>{f.i}</div><h3 className="text-base font-semibold mb-1.5">{f.t}</h3><p className="text-sm text-text2 leading-relaxed">{f.d}</p></div>
 ))}
 </div>
 </div>
 </section>

 <section className="py-20">
 <div className="max-w-[1140px] mx-auto px-6"><div className="bg-teal rounded-[20px] p-10 md:p-16 text-center relative overflow-hidden"><div className="absolute top-[-50%] right-[-20%] w-[400px] h-[400px] rounded-full bg-white/5"/><h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 relative z-10">Give your team a benefit they&apos;ll actually use</h2><p className="text-[17px] text-white/80 mb-8 relative z-10 max-w-[500px] mx-auto">Start a free 30-day trial. No credit card. No commitment.</p><div className="flex gap-3 justify-center flex-wrap relative z-10"><Link href="/business/signup" className="px-8 py-3.5 rounded-[10px] bg-white text-teal-dark font-semibold text-[15px]">Start free trial ↗</Link><Link href="/business/how-it-works" className="px-8 py-3.5 rounded-[10px] bg-white/15 text-white font-semibold text-[15px] border border-white/25">How it works</Link></div></div></div>
 </section>
 </main>
 <Footer variant="business" />
 </>);
}