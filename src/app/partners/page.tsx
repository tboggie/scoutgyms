import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function PartnersPage() {
  return (<>
    <Navbar variant="partners" />
    <main>
      <section className="pt-36 pb-20 text-center"><div className="max-w-[1140px] mx-auto px-6">
        <h1 className="font-[var(--font-display)] text-4xl md:text-[48px] font-extrabold leading-[1.1] tracking-tight mb-5">Get more members <em className="not-italic text-teal">without ads</em></h1>
        <p className="text-lg text-text2 max-w-[560px] mx-auto mb-9">List your gym on ScoutGyms for free. Pay only when a referred member signs up. No monthly fees, no contracts.</p>
        <div className="flex gap-3 justify-center"><Link href="/partners/claim" className="px-8 py-3.5 rounded-[10px] bg-teal text-white font-semibold text-[15px] hover:bg-teal-dark transition-colors">Claim your listing ↗</Link><Link href="/partners/dashboard" className="px-8 py-3.5 rounded-[10px] bg-card text-text font-semibold text-[15px] border border-border hover:border-teal transition-colors">Dashboard</Link></div>
      </div></section>
      <section className="py-20 bg-bg2"><div className="max-w-[1140px] mx-auto px-6">
        <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight mb-12 text-center">Why gyms love ScoutGyms</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[{i:'✏️',t:'Claim your listing',d:'Your gym may already be listed. Claim it, add photos, update pricing and respond to reviews.',bg:'bg-teal-light'},{i:'📊',t:'Analytics dashboard',d:'See who is viewing and comparing your gym, and where you are winning or losing.',bg:'bg-blue-light'},{i:'💰',t:'Pay per result',d:'No monthly fees. You only pay a commission when someone signs up through ScoutGyms.',bg:'bg-green-light'},{i:'📣',t:'Promote offers',d:'Run limited-time promotions that appear highlighted to nearby searchers.',bg:'bg-amber-light'},{i:'💬',t:'Respond to reviews',d:'Reply to member reviews publicly. Show potential members you care.',bg:'bg-purple-light'},{i:'🏆',t:'Earn badges',d:'Hit quality benchmarks and earn trust badges that show on your listing.',bg:'bg-coral-light'}].map(f=>(
            <div key={f.t} className="bg-card rounded-[14px] border border-border p-7 text-center hover:shadow-lg transition-all"><div className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-xl mx-auto mb-4 ${f.bg}`}>{f.i}</div><h3 className="text-base font-semibold mb-1.5">{f.t}</h3><p className="text-sm text-text2 leading-relaxed">{f.d}</p></div>
          ))}
        </div>
      </div></section>
    </main>
    <Footer variant="partners" />
  </>);
}