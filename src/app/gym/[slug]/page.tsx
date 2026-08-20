'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { MOCK_GYMS, MOCK_REVIEWS } from '@/lib/mock-data';
import { MapPin, Star, Clock, Waves, Dumbbell, Car, Share2, Heart, ChevronRight } from 'lucide-react';

export default function GymProfile() {
 const gym = MOCK_GYMS[0]; // Mock: would use params.slug

 return (<>
 <Navbar />
 <main className="pt-16 min-h-screen">
 {/* Breadcrumb */}
 <div className="bg-card border-b border-border py-3">
 <div className="max-w-[1140px] mx-auto px-6 flex items-center gap-2 text-sm text-text3">
 <Link href="/search" className="hover:text-teal">Search</Link><ChevronRight size={14}/><span className="text-text">{gym.name}</span>
 </div>
 </div>

 <div className="max-w-[1140px] mx-auto px-6 py-8">
 {/* Header */}
 <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
 <div>
 <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight">{gym.name}</h1>
 <p className="text-text2 mt-1 flex items-center gap-1"><MapPin size={14}/>{gym.address}</p>
 <div className="flex items-center gap-4 mt-3">
 <span className="flex items-center gap-1 text-lg font-semibold"><Star size={18} className="text-amber fill-amber"/>{gym.rating}</span>
 <span className="text-sm text-text3">{gym.reviewCount} reviews</span>
 {gym.is24hr && <span className="flex items-center gap-1 text-sm text-text2"><Clock size={14}/>24/7</span>}
 </div>
 </div>
 <div className="flex items-center gap-3">
 <button className="p-2.5 rounded-lg border border-border text-text2 hover:text-teal hover:border-teal transition-colors"><Heart size={18}/></button>
 <button className="p-2.5 rounded-lg border border-border text-text2 hover:text-teal hover:border-teal transition-colors"><Share2 size={18}/></button>
 <div className="text-right">
 <div className="text-3xl font-bold text-teal font-[var(--font-display)]">${gym.monthlyPrice}<span className="text-sm text-text3 font-normal">/mo</span></div>
 {gym.corporateRate && <p className="text-xs text-green font-semibold">Corporate: ${gym.corporateRate}/mo</p>}
 </div>
 </div>
 </div>

 {/* Photo grid */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
 {['/gym-photos/weights.jpg','/gym-photos/interior.jpg','/gym-photos/cardio.jpg','/gym-photos/class.jpg'].map((src,i)=>(
 <div key={i} className="h-40 rounded-xl overflow-hidden relative group cursor-pointer">
 <img src={src} alt={`Gym photo ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
 {i===3 && <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><span className="text-white text-sm font-semibold">+12 photos</span></div>}
 </div>
 ))}
 </div>

 <div className="grid lg:grid-cols-3 gap-8">
 {/* Main content */}
 <div className="lg:col-span-2 space-y-8">
 {/* Details */}
 <div className="bg-card rounded-2xl border border-border p-6">
 <h2 className="font-semibold text-lg mb-4">Details</h2>
 <div className="grid grid-cols-2 gap-4">
 {[{l:'Monthly',v:`$${gym.monthlyPrice}`},{l:'Join fee',v:gym.joinFee?`$${gym.joinFee}`:'Free'},{l:'Contract',v:gym.contractLength},{l:'Hours',v:gym.is24hr?'24/7':gym.hours.weekday},{l:'Parking',v:gym.parking?'Free parking':'No'},{l:'Classes',v:`${gym.classCount}/week`}].map(d=>(
 <div key={d.l} className="py-3 border-b border-border">
 <p className="text-xs text-text3 font-medium mb-0.5">{d.l}</p>
 <p className="text-sm font-semibold">{d.v}</p>
 </div>
 ))}
 </div>
 </div>

 {/* Amenities */}
 <div className="bg-card rounded-2xl border border-border p-6">
 <h2 className="font-semibold text-lg mb-4">Amenities</h2>
 <div className="flex flex-wrap gap-2">
 {gym.amenities.map(a=><span key={a} className="px-3 py-1.5 rounded-full text-sm bg-teal-light text-teal-dark font-medium">{a}</span>)}
 </div>
 </div>

 {/* Classes */}
 <div className="bg-card rounded-2xl border border-border p-6">
 <h2 className="font-semibold text-lg mb-4">Classes ({gym.classCount}/week)</h2>
 <div className="flex flex-wrap gap-2">
 {gym.classes.map(c=><span key={c} className="px-3 py-1.5 rounded-full text-sm bg-purple-light text-purple font-medium">{c}</span>)}
 </div>
 </div>

 {/* Peak hours */}
 <div className="bg-card rounded-2xl border border-border p-6">
 <h2 className="font-semibold text-lg mb-4">Peak hours</h2>
 <div className="flex items-end gap-1 h-24">
 {Array.from({length:24},(_,h)=>{
 const peak = gym.peakHours.includes(h);
 return <div key={h} className={`flex-1 rounded-t ${peak?'bg-teal':'bg-border'}`} style={{height:peak?'100%':'30%'}} title={`${h}:00`} />;
 })}
 </div>
 <div className="flex justify-between mt-2 text-[10px] text-text3"><span>12am</span><span>6am</span><span>12pm</span><span>6pm</span><span>12am</span></div>
 </div>

 {/* Reviews */}
 <div className="bg-card rounded-2xl border border-border p-6">
 <div className="flex items-center justify-between mb-4">
 <h2 className="font-semibold text-lg">Reviews ({gym.reviewCount})</h2>
 <Link href={`/gym/${gym.slug}/review`} className="text-sm text-teal font-semibold hover:underline">Write a review</Link>
 </div>
 <div className="space-y-4">
 {MOCK_REVIEWS.filter(r=>r.gymId===gym.id).map(r=>(
 <div key={r.id} className="py-4 border-b border-border last:border-none">
 <div className="flex items-center justify-between mb-2">
 <div className="flex items-center gap-2">
 <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center text-white text-xs font-semibold">{r.userName.charAt(0)}</div>
 <span className="text-sm font-semibold">{r.userName}</span>
 {r.verified && <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-green-light text-green">Verified</span>}
 </div>
 <div className="flex items-center gap-1 text-sm"><Star size={14} className="text-amber fill-amber"/>{r.rating}</div>
 </div>
 <p className="text-sm text-text2 leading-relaxed">{r.body}</p>
 <p className="text-xs text-text3 mt-2">{r.date}</p>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Sidebar */}
 <div className="space-y-4">
 <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
 <div className="text-3xl font-bold text-teal font-[var(--font-display)] mb-1">${gym.monthlyPrice}<span className="text-sm text-text3 font-normal">/mo</span></div>
 {gym.joinFee > 0 ? <p className="text-sm text-text3 mb-4">+${gym.joinFee} joining fee</p> : <p className="text-sm text-green font-medium mb-4">No joining fee</p>}
 <Link href={`/gym/${gym.slug}/trial`} className="block w-full text-center bg-teal text-white py-3 rounded-xl font-semibold text-[15px] hover:bg-teal-dark transition-colors mb-3">Book free trial</Link>
 <button className="block w-full text-center border border-teal text-teal py-3 rounded-xl font-semibold text-[15px] hover:bg-teal-light transition-colors">Share & earn $15</button>
 <div className="mt-4 p-3 rounded-lg bg-green-light text-center"><p className="text-xs font-semibold text-green">Earn $15 for every friend you refer to this gym</p></div>
 </div>
 </div>
 </div>
 </div>
 </main>
 <Footer />
 </>);
}