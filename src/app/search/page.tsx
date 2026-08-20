'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { MOCK_GYMS } from '@/lib/mock-data';
import { Search, MapPin, Star, SlidersHorizontal, Clock, Dumbbell, Waves } from 'lucide-react';

export default function SearchPage() {
 const [zip, setZip] = useState('90210');
 const [radius, setRadius] = useState(5);
 const [sort, setSort] = useState('distance');
 const [compareList, setCompareList] = useState<string[]>([]);

 const toggleCompare = (id: string) => {
 setCompareList(prev => prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 3 ? [...prev, id] : prev);
 };

 return (<>
 <Navbar />
 <main className="pt-16 min-h-screen">
 {/* Search bar */}
 <div className="bg-card border-b border-border py-4">
 <div className="max-w-[1140px] mx-auto px-6 flex flex-col sm:flex-row gap-3 items-center">
 <div className="flex items-center gap-2 bg-bg rounded-lg border border-border px-3 py-2.5 flex-1 w-full">
 <MapPin size={16} className="text-text3" />
 <input value={zip} onChange={e=>setZip(e.target.value)} placeholder="Zip code" className="bg-transparent outline-none text-sm flex-1 text-text" />
 </div>
 <select value={radius} onChange={e=>setRadius(+e.target.value)} className="bg-bg border border-border rounded-lg px-3 py-2.5 text-sm text-text2">
 <option value={1}>1 mile</option><option value={3}>3 miles</option><option value={5}>5 miles</option><option value={10}>10 miles</option><option value={25}>25 miles</option>
 </select>
 <select value={sort} onChange={e=>setSort(e.target.value)} className="bg-bg border border-border rounded-lg px-3 py-2.5 text-sm text-text2">
 <option value="distance">Nearest first</option><option value="price">Lowest price</option><option value="rating">Highest rated</option>
 </select>
 <button className="bg-teal text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-dark transition-colors flex items-center gap-2"><Search size={14}/>Search</button>
 </div>
 </div>

 <div className="max-w-[1140px] mx-auto px-6 py-6">
 <div className="flex items-center justify-between mb-4">
 <p className="text-sm text-text2">{MOCK_GYMS.length} gyms found near <strong>{zip}</strong></p>
 {compareList.length > 1 && <Link href={`/compare?gyms=${compareList.join(',')}`} className="bg-teal text-white px-4 py-2 rounded-lg text-sm font-semibold">Compare {compareList.length} gyms</Link>}
 </div>

 {/* Filters */}
 <div className="flex gap-2 mb-6 flex-wrap">
 {['24/7','Pool','Sauna','Free parking','No contract','Classes'].map(f=>(
 <button key={f} className="px-3 py-1.5 rounded-full text-xs font-semibold border border-border text-text2 hover:border-teal hover:text-teal transition-colors">{f}</button>
 ))}
 </div>

 {/* Results */}
 <div className="flex flex-col gap-4">
 {MOCK_GYMS.map(gym=>(
 <div key={gym.id} className="bg-card rounded-2xl border border-border p-5 hover:shadow-lg transition-all">
 <div className="flex flex-col md:flex-row md:items-center gap-4">
 <img src={['/gym-photos/weights.jpg','/gym-photos/cardio.jpg','/gym-photos/interior.jpg','/gym-photos/machines.jpg','/gym-photos/training.jpg','/gym-photos/pool.jpg'][parseInt(gym.id)-1] || '/gym-photos/weights.jpg'} alt={gym.name} className="w-full md:w-28 h-20 rounded-xl object-cover flex-shrink-0"/>
 <div className="flex-1">
 <div className="flex items-start justify-between">
 <div>
 <Link href={`/gym/${gym.slug}`} className="text-lg font-semibold hover:text-teal transition-colors">{gym.name}</Link>
 <p className="text-sm text-text3 mt-0.5 flex items-center gap-1"><MapPin size={12}/>{gym.distance} miles · {gym.address}</p>
 </div>
 <div className="text-right">
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
 <button onClick={()=>toggleCompare(gym.id)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${compareList.includes(gym.id)?'bg-teal text-white border-teal':'border-border text-text2 hover:border-teal'}`}>
 {compareList.includes(gym.id)?'✓ Comparing':'+ Compare'}
 </button>
 <Link href={`/gym/${gym.slug}`} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-teal hover:bg-teal-light transition-colors">View details →</Link>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </main>
 <Footer />
 </>);
}