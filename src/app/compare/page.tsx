'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { MOCK_GYMS } from '@/lib/mock-data';
import { Star, Check, X as XIcon } from 'lucide-react';

export default function ComparePage() {
  const gyms = MOCK_GYMS.slice(0, 3);

  return (<>
    <Navbar />
    <main className="pt-16 min-h-screen">
      <div className="max-w-[1140px] mx-auto px-6 py-8">
        <p className="text-[13px] font-semibold text-teal uppercase tracking-[1.5px] mb-3">Compare</p>
        <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-2">Side-by-side comparison</h1>
        <p className="text-text2 mb-8">Compare up to 3 gyms on everything that matters.</p>

        <div className="bg-card rounded-2xl border border-border overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-xs font-semibold text-text3 uppercase tracking-wide w-36"></th>
                {gyms.map(g=><th key={g.id} className="p-4 text-left"><Link href={`/gym/${g.slug}`} className="text-base font-semibold hover:text-teal">{g.name}</Link><div className="flex items-center gap-1 mt-1 text-sm"><Star size={14} className="text-amber fill-amber"/>{g.rating} ({g.reviewCount})</div></th>)}
              </tr>
            </thead>
            <tbody>
              {[
                {l:'Monthly price',v:gyms.map(g=>`$${g.monthlyPrice}`)},
                {l:'Join fee',v:gyms.map(g=>g.joinFee?`$${g.joinFee}`:'Free')},
                {l:'Contract',v:gyms.map(g=>g.contractLength)},
                {l:'24/7 access',v:gyms.map(g=>g.is24hr),bool:true},
                {l:'Pool',v:gyms.map(g=>g.hasPool),bool:true},
                {l:'Sauna',v:gyms.map(g=>g.hasSauna),bool:true},
                {l:'Parking',v:gyms.map(g=>g.parking),bool:true},
                {l:'Classes/week',v:gyms.map(g=>String(g.classCount))},
                {l:'Corporate rate',v:gyms.map(g=>`$${g.corporateRate}/mo`)},
              ].map(row=>(
                <tr key={row.l} className="border-b border-border last:border-none">
                  <td className="p-4 text-sm font-medium text-text2">{row.l}</td>
                  {row.v.map((val,i)=>(
                    <td key={i} className="p-4 text-sm font-semibold">
                      {row.bool ? (val ? <Check size={16} className="text-green"/> : <XIcon size={16} className="text-red"/>) : val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {gyms.map(g=>(
            <Link key={g.id} href={`/gym/${g.slug}/trial`} className="block bg-teal text-white text-center py-3 rounded-xl font-semibold text-[15px] hover:bg-teal-dark transition-colors">Book trial at {g.name}</Link>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>);
}