import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (<><Navbar /><main className="pt-16 min-h-screen">
    <section className="pt-20 pb-16 text-center">
      <div className="max-w-[1140px] mx-auto px-6">
        <p className="text-[13px] font-semibold text-teal uppercase tracking-[1.5px] mb-3">About ScoutGyms</p>
        <h1 className="font-[var(--font-display)] text-4xl md:text-[48px] font-extrabold leading-[1.1] tracking-tight mb-4">We believe choosing a gym<br/>shouldn&apos;t be this hard</h1>
        <p className="text-lg text-text2 max-w-[600px] mx-auto">The free platform that helps you find, compare, and join the right gym — and get rewarded for it.</p>
      </div>
    </section>

    <section className="py-16 bg-bg2">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-4">The problem</h2>
            <p className="text-text2 leading-relaxed mb-4">Every time you move to a new area or want to switch gyms, you spend hours Googling, reading outdated reviews, and calling gyms for pricing they won&apos;t share on their website.</p>
            <p className="text-text2 leading-relaxed">Most gym comparison sites are just ad platforms that rank whoever pays the most. You deserve real data, real reviews, and a real side-by-side comparison.</p>
          </div>
          <div>
            <h2 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-4">Our solution</h2>
            <p className="text-text2 leading-relaxed mb-4">ScoutGyms is the platform we wished existed. Type in your zip code, see every gym nearby with real pricing, verified reviews, and compare them in minutes, not weeks.</p>
            <p className="text-text2 leading-relaxed">We also reward you for helping friends find their gym through our referral programme, and help companies offer gym benefits without the admin headaches.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-8">ScoutGyms by the numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{n:'200+',l:'Gyms listed'},{n:'50',l:'States covered'},{n:'3',l:'Revenue streams'},{n:'24/7',l:'Platform access'}].map(s=>(
            <div key={s.l} className="bg-card rounded-xl border border-border p-6">
              <div className="font-[var(--font-display)] text-3xl font-extrabold text-teal">{s.n}</div>
              <div className="text-sm text-text3 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-bg2">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-8 text-center">Our values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{t:'Transparency first',d:'Real prices, real reviews, no hidden fees. We show you everything upfront.'},{t:'Earn what you share',d:'If you recommend a gym and someone joins, you deserve to get paid for it.'},{t:'Built for everyone',d:'Whether you want a $19/mo basic gym or a $185/mo CrossFit box, we help you find it.'}].map(v=>(
            <div key={v.t} className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold text-base mb-2">{v.t}</h3>
              <p className="text-sm text-text2 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main><Footer /></>);
}
