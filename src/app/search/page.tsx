'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { MOCK_GYMS, US_STATES } from '@/lib/mock-data';
import { Search, MapPin, Star, Clock, Dumbbell, Waves } from 'lucide-react';


export default function SearchPage() {
  const [stateFilter, setStateFilter] = useState('');
  const [sort, setSort] = useState('distance');
  const [compareList, setCompareList] = useState<string[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 20;

  const toggleFilter = (f: string) => { setFilters(prev => prev.includes(f) ? prev.filter(x=>x!==f) : [...prev, f]); setPage(1); };
  const toggleCompare = (id: string) => setCompareList(prev => prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 3 ? [...prev, id] : prev);

  const resetPage = () => setPage(1);
  let results = MOCK_GYMS;

  // Filter by state
  if (stateFilter) {
    results = results.filter(g => g.address.includes(`, ${stateFilter} `));
  }

  // Filter by search text (name or city)
  if (searchText) {
    const q = searchText.toLowerCase();
    results = results.filter(g => g.name.toLowerCase().includes(q) || g.address.toLowerCase().includes(q));
  }

  // Filter toggles
  if (filters.includes('24/7')) results = results.filter(g => g.is24hr);
  if (filters.includes('Pool')) results = results.filter(g => g.hasPool);
  if (filters.includes('Sauna')) results = results.filter(g => g.hasSauna);
  if (filters.includes('Free parking')) results = results.filter(g => g.parking);
  if (filters.includes('No contract')) results = results.filter(g => g.contractLength === 'None');
  if (filters.includes('Classes')) results = results.filter(g => g.classCount >= 10);

  // Sort
  if (sort === 'price') results = [...results].sort((a,b) => a.monthlyPrice - b.monthlyPrice);
  else if (sort === 'rating') results = [...results].sort((a,b) => b.rating - a.rating);
  else results = [...results].sort((a,b) => a.distance - b.distance);

  return (<>
    <Navbar />
    <main className="pt-16 min-h-screen">
      <div className="bg-card border-b border-border py-4">
        <div className="max-w-[1140px] mx-auto px-6 flex flex-col sm:flex-row gap-3 items-center">
          <div className="flex items-center gap-2 bg-bg rounded-lg border border-border px-3 py-2.5 flex-1 w-full">
            <MapPin size={16} className="text-text3" />
            <input value={searchText} onChange={e=>setSearchText(e.target.value)} placeholder="Search by city, gym name, or zip..." className="bg-transparent outline-none text-sm flex-1 text-text" />
          </div>
          <select value={stateFilter} onChange={e=>setStateFilter(e.target.value)} className="bg-bg border border-border rounded-lg px-3 py-2.5 text-sm text-text2">
            <option value="">All states</option>
            {US_STATES.map(s => <option key={s.code} value={s.code}>{s.name}</option>)}
          </select>
          <select value={sort} onChange={e=>setSort(e.target.value)} className="bg-bg border border-border rounded-lg px-3 py-2.5 text-sm text-text2">
            <option value="distance">Nearest first</option><option value="price">Lowest price</option><option value="rating">Highest rated</option>
          </select>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-text2"><strong>{results.length}</strong> gyms found{stateFilter ? ` in ${US_STATES.find(s=>s.code===stateFilter)?.name}` : ' across the USA'}</p>
          {compareList.length > 1 && <Link href={`/compare?gyms=${compareList.join(',')}`} className="bg-teal text-white px-4 py-2 rounded-lg text-sm font-semibold">Compare {compareList.length} gyms</Link>}
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {['24/7','Pool','Sauna','Free parking','No contract','Classes'].map(f=>(
            <button key={f} onClick={()=>toggleFilter(f)} className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${filters.includes(f)?'bg-teal text-white border-teal':'border-border text-text2 hover:border-teal'}`}>{f}</button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {results.slice((page-1)*perPage, page*perPage).map(gym=>(
            <div key={gym.id} className="bg-card rounded-2xl border border-border p-5 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <img src={`/gym-photos/u${String(parseInt(gym.id)).padStart(3,'0')}.jpg`} alt={gym.name} className="w-full md:w-28 h-20 rounded-xl object-cover flex-shrink-0"/>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <Link href={`/gym/${gym.slug}`} className="text-lg font-semibold hover:text-teal transition-colors">{gym.name}</Link>
                      <p className="text-sm text-text3 mt-0.5 flex items-center gap-1 truncate"><MapPin size={12}/>{gym.address}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl font-bold text-teal font-[var(--font-display)]">${gym.monthlyPrice}<span className="text-xs text-text3 font-normal">/mo</span></div>
                      {gym.joinFee > 0 && <p className="text-xs text-text3">+${gym.joinFee} join fee</p>}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3 flex-wrap">
                    <span className="flex items-center gap-1 text-sm"><Star size={14} className="text-amber fill-amber"/>{gym.rating} ({gym.reviewCount})</span>
                    {gym.is24hr && <span className="flex items-center gap-1 text-xs text-text2"><Clock size={12}/>24/7</span>}
                    {gym.hasPool && <span className="flex items-center gap-1 text-xs text-text2"><Waves size={12}/>Pool</span>}
                    <span className="flex items-center gap-1 text-xs text-text2"><Dumbbell size={12}/>{gym.classCount} classes/week</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-bg border border-border text-text3">{gym.contractLength}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Link href={`/gym/${gym.slug}/book`} className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-teal text-white hover:bg-teal-dark transition-colors">Book now</Link>
                    <button onClick={()=>toggleCompare(gym.id)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${compareList.includes(gym.id)?'bg-teal text-white border-teal':'border-border text-text2 hover:border-teal'}`}>
                      {compareList.includes(gym.id)?'Comparing':'+ Compare'}
                    </button>
                    <Link href={`/gym/${gym.slug}`} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-teal hover:bg-teal-light transition-colors">View details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {results.length > perPage && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page === 1} className="px-4 py-2 rounded-lg text-sm font-semibold border border-border text-text2 hover:border-teal disabled:opacity-30 disabled:cursor-not-allowed transition-colors">Previous</button>
              <span className="text-sm text-text3 px-3">Page {page} of {Math.ceil(results.length / perPage)}</span>
              <button onClick={() => setPage(p => Math.min(Math.ceil(results.length / perPage), p+1))} disabled={page >= Math.ceil(results.length / perPage)} className="px-4 py-2 rounded-lg text-sm font-semibold border border-border text-text2 hover:border-teal disabled:opacity-30 disabled:cursor-not-allowed transition-colors">Next</button>
            </div>
          )}
          {results.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl font-semibold mb-2">No gyms found</p>
              <p className="text-sm text-text2">Try a different state or remove some filters.</p>
            </div>
          )}
        </div>
      </div>
    </main>
    <Footer />
  </>);
}
