import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function BusinessPricing() {
 const plans = [
 {tier:'Starter',price:'$15',desc:'Up to 50 employees',features:[{t:'Full gym network',y:true},{t:'Employee self-serve portal',y:true},{t:'Basic usage dashboard',y:true},{t:'Monthly invoice',y:true},{t:'SSO integration',y:false},{t:'Wellness challenges',y:false},{t:'Dedicated account manager',y:false}],cta:'Start free trial',featured:false},
 {tier:'Growth',price:'$22',desc:'Up to 500 employees',features:[{t:'Full gym network',y:true},{t:'Employee self-serve portal',y:true},{t:'Advanced analytics + ROI',y:true},{t:'SSO integration',y:true},{t:'Wellness challenges',y:true},{t:'Priority support',y:true},{t:'Dedicated account manager',y:false}],cta:'Start free trial',featured:true},
 {tier:'Enterprise',price:'Custom',desc:'500+ employees',features:[{t:'Everything in Growth',y:true},{t:'HRIS auto-sync',y:true},{t:'Custom gym curation',y:true},{t:'Multi-location management',y:true},{t:'Dedicated account manager',y:true},{t:'Quarterly business reviews',y:true},{t:'Custom reporting + API',y:true}],cta:'Contact sales',featured:false},
 ];

 return (<>
 <Navbar variant="business" />
 <main className="pt-16 min-h-screen">
 <div className="max-w-[1140px] mx-auto px-6 py-16 text-center">
 <p className="text-[13px] font-semibold text-teal uppercase tracking-[1.5px] mb-3">Pricing</p>
 <h1 className="font-[var(--font-display)] text-4xl md:text-[48px] font-extrabold tracking-tight mb-4">Simple per-seat pricing</h1>
 <p className="text-lg text-text2 max-w-[500px] mx-auto mb-12">No setup fees. No long-term contracts. Cancel anytime.</p>
 <div className="grid md:grid-cols-3 gap-5 items-start">
 {plans.map(p=>(
 <div key={p.tier} className={`bg-card rounded-2xl border p-8 text-left relative ${p.featured?'border-teal shadow-[0_12px_40px_rgba(11,125,142,0.1)]':'border-border'}`}>
 {p.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-semibold px-3.5 py-1 rounded-full">Most popular</div>}
 <div className="text-sm font-semibold text-teal uppercase tracking-wider mb-2">{p.tier}</div>
 <div className="font-[var(--font-display)] text-[42px] font-extrabold tracking-tight">{p.price}{p.price!=='Custom'&&<span className="text-base text-text3 font-normal">/seat/mo</span>}</div>
 <p className="text-sm text-text2 mt-1 mb-6">{p.desc}</p>
 <ul className="space-y-3 mb-8">{p.features.map(f=>(<li key={f.t} className="flex items-center gap-2.5 text-sm text-text2"><span className={`text-sm font-bold ${f.y?'text-green':'text-text3'}`}>{f.y?'✓':'–'}</span>{f.t}</li>))}</ul>
 <Link href="/business/signup" className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-colors ${p.featured?'bg-teal text-white hover:bg-teal-dark':'border border-teal text-teal hover:bg-teal-light'}`}>{p.cta}</Link>
 </div>
 ))}
 </div>
 </div>
 </main>
 <Footer variant="business" />
 </>);
}