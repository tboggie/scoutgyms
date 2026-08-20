import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function BusinessHowItWorks() {
  return (<>
    <Navbar variant="business" />
    <main className="pt-16 min-h-screen">
      <section className="pt-20 pb-16 text-center">
        <div className="max-w-[1140px] mx-auto px-6">
          <p className="text-[13px] font-semibold text-teal uppercase tracking-[1.5px] mb-3">How it works</p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-[48px] font-extrabold leading-[1.1] tracking-tight mb-4">Live in days, <em className="not-italic text-teal">not months</em></h1>
          <p className="text-lg text-text2 max-w-[580px] mx-auto leading-relaxed">Four steps from signing up to employees using their gym benefit.</p>
        </div>
      </section>

      {[{n:'1',badge:'Step 1 — Takes 5 minutes',t:'Pick a plan that fits your team size',d:'Choose Starter, Growth, or Enterprise. Every plan includes the full gym network. No setup fees, free 30-day trial, pay only for active seats.',bg:'bg-teal-light',tc:'text-teal-dark',items:['No setup fees — cancel anytime','Pay only for active seats','Switch tiers anytime']},
        {n:'2',badge:'Step 2 — Takes 10 minutes',t:'Invite your team in one click',d:'Upload a CSV of employee emails or connect your HRIS. Employees receive an invite and set up their account using their work email.',bg:'bg-purple-light',tc:'text-purple',items:['CSV upload for quick setup','HRIS auto-sync with BambooHR, Workday, Rippling','SSO via Okta or Azure AD']},
        {n:'3',badge:'Step 3 — Employee self-serve',t:'Each employee picks the gym that suits them',d:'Employees enter their zip code and see every partner gym with corporate rates applied automatically. They compare, choose and join.',bg:'bg-green-light',tc:'text-green',items:['Corporate rates shown automatically','Side-by-side comparison','Free trial passes at most gyms','Change gyms anytime']},
        {n:'4',badge:'Step 4 — Ongoing',t:'Track engagement, prove the ROI',d:'Your HR dashboard updates in real time. See utilisation, cost per member, and export reports for leadership.',bg:'bg-amber-light',tc:'text-amber',items:['Utilisation by office and department','Cost-per-active-member calculated','One invoice per month','Exportable PDF and CSV reports']},
      ].map((s,i)=>(
        <section key={s.n} className={`py-16 ${i%2===1?'bg-bg2':''}`}>
          <div className="max-w-[1140px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
            <div className={i%2===1?'md:order-2':''}>
              <div className={`inline-flex text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-4 ${s.bg} ${s.tc}`}>{s.badge}</div>
              <h2 className="font-[var(--font-display)] text-2xl md:text-[32px] font-bold tracking-tight mb-3">{s.t}</h2>
              <p className="text-base text-text2 leading-relaxed mb-5">{s.d}</p>
              <ul className="space-y-3">{s.items.map(it=>(<li key={it} className="flex items-start gap-3 text-[15px] text-text2"><span className={`w-7 h-7 rounded-lg flex items-center justify-center text-[13px] font-bold flex-shrink-0 ${s.bg} ${s.tc}`}>✓</span>{it}</li>))}</ul>
            </div>
            <div className={i%2===1?'md:order-1':''}>
              <div className="bg-card rounded-2xl border border-border p-8 shadow-lg flex items-center justify-center h-64 text-6xl">{['📋','📧','🏋️','📊'][i]}</div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20"><div className="max-w-[1140px] mx-auto px-6"><div className="bg-teal rounded-[20px] p-10 md:p-16 text-center relative overflow-hidden"><h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 relative z-10">Ready to see it in action?</h2><p className="text-[17px] text-white/80 mb-8 relative z-10">Book a 20-minute demo with our team.</p><div className="flex gap-3 justify-center flex-wrap relative z-10"><Link href="/business/signup" className="px-8 py-3.5 rounded-[10px] bg-white text-teal-dark font-semibold text-[15px]">Book a demo ↗</Link></div></div></div></section>
    </main>
    <Footer variant="business" />
  </>);
}