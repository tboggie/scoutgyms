'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { MOCK_GYMS } from '@/lib/mock-data';
import { Star, Check, X as XIcon, Search } from 'lucide-react';

function CompareContent() {
  const searchParams = useSearchParams();
  const gymIds = searchParams.get('gyms')?.split(',') || [];
  const [selectedIds, setSelectedIds] = useState<string[]>(gymIds.length > 0 ? gymIds : []);
  const [searchText, setSearchText] = useState('');

  const selectedGyms = selectedIds.map(id => MOCK_GYMS.find(g => g.id === id)).filter(Boolean) as typeof MOCK_GYMS;
  const searchResults = searchText.length > 1 ? MOCK_GYMS.filter(g => 
    g.name.toLowerCase().includes(searchText.toLowerCase()) || g.address.toLowerCase().includes(searchText.toLowerCase())
  ).slice(0, 5) : [];

  const addGym = (id: string) => { if (selectedIds.length < 3 && !selectedIds.includes(id)) { setSelectedIds([...selectedIds, id]); setSearchText(''); } };
  const removeGym = (id: string) => setSelectedIds(selectedIds.filter(x => x !== id));

  return (
    <div className="max-w-[1140px] mx-auto px-6 py-8">
      <p className="text-[13px] font-semibold text-teal uppercase tracking-[1.5px] mb-3">Compare</p>
      <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-2">Side-by-side comparison</h1>
      <p className="text-text2 mb-6">Compare up to 3 gyms on everything that matters.</p>

      {selectedGyms.length < 3 && (
        <div className="mb-6 relative max-w-md">
          <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3">
            <Search size={16} className="text-text3"/>
            <input value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search to add a gym..." className="bg-transparent outline-none text-sm flex-1 text-text"/>
          </div>
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-lg z-10 overflow-hidden">
              {searchResults.map(g => (
                <button key={g.id} onClick={() => addGym(g.id)} className="w-full text-left px-4 py-3 text-sm hover:bg-bg2 transition-colors border-b border-border last:border-none">
                  <span className="font-medium">{g.name}</span> <span className="text-text3">· ${g.monthlyPrice}/mo · {g.address.split(',').slice(-2).join(',')}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {selectedGyms.length === 0 ? (
        <div className="bg-card rounded-2xl border border-border p-16 text-center">
          <p className="text-xl font-semibold mb-2">No gyms selected</p>
          <p className="text-sm text-text2 mb-4">Search above or go to the <Link href="/search" className="text-teal font-semibold">search page</Link> and click "Compare" on the gyms you want.</p>
        </div>
      ) : (
        <>
          <div className="bg-card rounded-2xl border border-border overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-xs font-semibold text-text3 uppercase tracking-wide w-36"></th>
                  {selectedGyms.map(g => (
                    <th key={g.id} className="p-4 text-left">
                      <div className="flex items-center justify-between">
                        <Link href={`/gym/${g.slug}`} className="text-base font-semibold hover:text-teal">{g.name}</Link>
                        <button onClick={() => removeGym(g.id)} className="text-text3 hover:text-red ml-2"><XIcon size={14}/></button>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-sm"><Star size={14} className="text-amber fill-amber"/>{g.rating} ({g.reviewCount})</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {l:'Monthly price',v:(g: typeof MOCK_GYMS[0])=>`$${g.monthlyPrice}`},
                  {l:'Join fee',v:(g: typeof MOCK_GYMS[0])=>g.joinFee?`$${g.joinFee}`:'Free'},
                  {l:'Contract',v:(g: typeof MOCK_GYMS[0])=>g.contractLength},
                  {l:'24/7 access',v:(g: typeof MOCK_GYMS[0])=>g.is24hr,bool:true},
                  {l:'Pool',v:(g: typeof MOCK_GYMS[0])=>g.hasPool,bool:true},
                  {l:'Sauna',v:(g: typeof MOCK_GYMS[0])=>g.hasSauna,bool:true},
                  {l:'Parking',v:(g: typeof MOCK_GYMS[0])=>g.parking,bool:true},
                  {l:'Classes/week',v:(g: typeof MOCK_GYMS[0])=>String(g.classCount)},
                  {l:'Corporate rate',v:(g: typeof MOCK_GYMS[0])=>`$${g.corporateRate}/mo`},
                  {l:'Location',v:(g: typeof MOCK_GYMS[0])=>g.address.split(',').slice(-2).join(',').trim()},
                ].map(row=>(
                  <tr key={row.l} className="border-b border-border last:border-none">
                    <td className="p-4 text-sm font-medium text-text2">{row.l}</td>
                    {selectedGyms.map(g=>(
                      <td key={g.id} className="p-4 text-sm font-semibold">
                        {row.bool ? (row.v(g) ? <Check size={16} className="text-green"/> : <XIcon size={16} className="text-red"/>) : String(row.v(g))}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`grid gap-4 mt-6 ${selectedGyms.length === 1 ? 'grid-cols-1' : selectedGyms.length === 2 ? 'grid-cols-2' : 'md:grid-cols-3'}`}>
            {selectedGyms.map(g=>(
              <Link key={g.id} href={`/gym/${g.slug}/book`} className="block bg-teal text-white text-center py-3 rounded-xl font-semibold text-[15px] hover:bg-teal-dark transition-colors">Book {g.name}</Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ComparePage() {
  return (<>
    <Navbar />
    <main className="pt-16 min-h-screen">
      <Suspense fallback={<div className="max-w-[1140px] mx-auto px-6 py-16 text-center text-text3">Loading...</div>}>
        <CompareContent />
      </Suspense>
    </main>
    <Footer />
  </>);
}
