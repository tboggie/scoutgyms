'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { MOCK_GYMS } from '@/lib/mock-data';
import { MapPin, Star, Check, Shield, ChevronRight } from 'lucide-react';

export default function BookPage() {
  const params = useParams();
  const gym = MOCK_GYMS.find(g => g.slug === params.slug) || MOCK_GYMS[0];
  const [plan, setPlan] = useState<'monthly'|'annual'>('monthly');
  const [step, setStep] = useState(1);

  const monthlyPrice = gym.monthlyPrice;
  const annualPrice = 70;
  const selectedPrice = plan === 'annual' ? annualPrice : monthlyPrice;

  return (<>
    <Navbar />
    <main className="pt-16 min-h-screen">
      <div className="bg-card border-b border-border py-3">
        <div className="max-w-[1140px] mx-auto px-6 flex items-center gap-2 text-sm text-text3">
          <Link href="/search" className="hover:text-teal">Search</Link><ChevronRight size={14}/>
          <Link href={`/gym/${gym.slug}`} className="hover:text-teal">{gym.name}</Link><ChevronRight size={14}/>
          <span className="text-text">Book membership</span>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-8">
        {/* Progress */}
        <div className="flex items-center gap-3 mb-8">
          {['Choose plan','Your details','Payment'].map((s,i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step > i+1 ? 'bg-green text-white' : step === i+1 ? 'bg-teal text-white' : 'bg-bg border border-border text-text3'}`}>
                {step > i+1 ? <Check size={14}/> : i+1}
              </div>
              <span className={`text-sm font-medium hidden sm:block ${step === i+1 ? 'text-text' : 'text-text3'}`}>{s}</span>
              {i < 2 && <div className="flex-1 h-px bg-border"/>}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="space-y-4">
                <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-2">Choose your plan at {gym.name}</h1>
                <p className="text-text2 mb-6">Select a membership plan. You can cancel or change anytime.</p>

                <button onClick={() => setPlan('monthly')} className={`w-full text-left p-5 rounded-xl border-2 transition-all ${plan === 'monthly' ? 'border-teal bg-teal-light' : 'border-border hover:border-teal/50'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-base">Monthly</p>
                      <p className="text-sm text-text2 mt-0.5">No commitment, cancel anytime</p>
                    </div>
                    <div className="text-right">
                      <p className="font-[var(--font-display)] text-2xl font-bold text-teal">${monthlyPrice}<span className="text-sm text-text3 font-normal">/mo</span></p>
                    </div>
                  </div>
                </button>

                <button onClick={() => setPlan('annual')} className={`w-full text-left p-5 rounded-xl border-2 transition-all relative ${plan === 'annual' ? 'border-teal bg-teal-light' : 'border-border hover:border-teal/50'}`}>
                  <div className="absolute -top-2.5 right-4 bg-green text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">Save 15%</div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-base">Annual</p>
                      <p className="text-sm text-text2 mt-0.5">Best value — billed yearly</p>
                    </div>
                    <div className="text-right">
                      <p className="font-[var(--font-display)] text-2xl font-bold text-teal">${annualPrice}<span className="text-sm text-text3 font-normal">/mo</span></p>
                      <p className="text-xs text-text3 line-through">${monthlyPrice}/mo</p>
                    </div>
                  </div>
                </button>

                {gym.joinFee > 0 && (
                  <div className="p-4 rounded-xl bg-amber-light border border-amber/20">
                    <p className="text-sm font-medium text-amber">One-time joining fee: ${gym.joinFee}</p>
                    <p className="text-xs text-text2 mt-0.5">Charged with your first payment</p>
                  </div>
                )}

                <button onClick={() => setStep(2)} className="w-full bg-teal text-white py-3.5 rounded-xl font-semibold text-[15px] hover:bg-teal-dark transition-colors mt-4">Continue</button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Your details</h1>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-sm font-medium text-text2 block mb-1.5">First name</label><input placeholder="Jake" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
                  <div><label className="text-sm font-medium text-text2 block mb-1.5">Last name</label><input placeholder="Mitchell" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
                </div>
                <div><label className="text-sm font-medium text-text2 block mb-1.5">Email</label><input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
                <div><label className="text-sm font-medium text-text2 block mb-1.5">Phone</label><input type="tel" placeholder="(555) 123-4567" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
                <div><label className="text-sm font-medium text-text2 block mb-1.5">Date of birth</label><input type="date" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
                <div className="flex gap-3 mt-4">
                  <button onClick={() => setStep(1)} className="flex-1 border border-border text-text2 py-3.5 rounded-xl font-semibold text-[15px] hover:border-teal transition-colors">Back</button>
                  <button onClick={() => setStep(3)} className="flex-1 bg-teal text-white py-3.5 rounded-xl font-semibold text-[15px] hover:bg-teal-dark transition-colors">Continue to payment</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Payment</h1>
                <div><label className="text-sm font-medium text-text2 block mb-1.5">Card number</label><input placeholder="4242 4242 4242 4242" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-sm font-medium text-text2 block mb-1.5">Expiry</label><input placeholder="MM / YY" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
                  <div><label className="text-sm font-medium text-text2 block mb-1.5">CVC</label><input placeholder="123" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
                </div>
                <div><label className="text-sm font-medium text-text2 block mb-1.5">Name on card</label><input placeholder="Jake Mitchell" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>

                <div className="flex items-start gap-2 mt-2">
                  <input type="checkbox" className="mt-1 rounded"/>
                  <p className="text-xs text-text2">I agree to the <Link href="/terms" className="text-teal">Terms of Service</Link> and <Link href="/privacy" className="text-teal">Privacy Policy</Link>. I understand my membership will auto-renew and I can cancel anytime.</p>
                </div>

                <div className="flex items-center gap-2 p-3 rounded-xl bg-bg border border-border">
                  <Shield size={16} className="text-green flex-shrink-0"/>
                  <p className="text-xs text-text2">Secured by Stripe. Your card details are encrypted and never stored on our servers.</p>
                </div>

                <div className="flex gap-3 mt-4">
                  <button onClick={() => setStep(2)} className="flex-1 border border-border text-text2 py-3.5 rounded-xl font-semibold text-[15px] hover:border-teal transition-colors">Back</button>
                  <button onClick={() => setStep(4)} className="flex-1 bg-teal text-white py-3.5 rounded-xl font-semibold text-[15px] hover:bg-teal-dark transition-colors">Pay ${selectedPrice}{plan === 'annual' ? ` x 12 = $${selectedPrice * 12}` : ''}{gym.joinFee > 0 ? ` + $${gym.joinFee} fee` : ''}</button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-light flex items-center justify-center mx-auto mb-4"><Check size={32} className="text-green"/></div>
                <h1 className="font-[var(--font-display)] text-3xl font-bold tracking-tight mb-2">You're in!</h1>
                <p className="text-text2 mb-2">Your membership at <strong>{gym.name}</strong> is confirmed.</p>
                <p className="text-sm text-text3 mb-8">Check your email for your membership details and gym access instructions.</p>
                <div className="bg-card rounded-xl border border-border p-6 max-w-sm mx-auto mb-6 text-left">
                  <p className="text-xs text-text3 font-medium mb-3">Membership summary</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span className="text-text2">Gym</span><span className="font-medium">{gym.name}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-text2">Plan</span><span className="font-medium capitalize">{plan}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-text2">Monthly</span><span className="font-medium text-teal">${selectedPrice}/mo</span></div>
                    {gym.joinFee > 0 && <div className="flex justify-between text-sm"><span className="text-text2">Join fee</span><span className="font-medium">${gym.joinFee}</span></div>}
                    <div className="flex justify-between text-sm pt-2 border-t border-border"><span className="text-text2">First charge</span><span className="font-bold">${selectedPrice + gym.joinFee}</span></div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-teal-light max-w-sm mx-auto mb-6">
                  <p className="text-sm font-semibold text-teal-dark">Refer a friend and earn $15</p>
                  <p className="text-xs text-text2 mt-1">Share your referral link and get $15 for every friend who joins.</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <Link href="/dashboard" className="px-6 py-3 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal-dark transition-colors">Go to dashboard</Link>
                  <Link href="/search" className="px-6 py-3 rounded-xl border border-border text-text2 font-semibold text-sm hover:border-teal transition-colors">Browse more gyms</Link>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar summary */}
          {step < 4 && (
            <div className="hidden lg:block">
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                <h3 className="font-semibold mb-3">{gym.name}</h3>
                <p className="text-sm text-text3 flex items-center gap-1 mb-2"><MapPin size={12}/>{gym.address}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center gap-1 text-sm"><Star size={14} className="text-amber fill-amber"/>{gym.rating}</span>
                  <span className="text-xs text-text3">({gym.reviewCount} reviews)</span>
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-text2">{plan === 'annual' ? 'Annual' : 'Monthly'} plan</span><span className="font-semibold">${selectedPrice}/mo</span></div>
                  {gym.joinFee > 0 && <div className="flex justify-between text-sm"><span className="text-text2">Joining fee</span><span className="font-semibold">${gym.joinFee}</span></div>}
                  <div className="flex justify-between text-sm pt-2 border-t border-border"><span className="font-medium">Due today</span><span className="font-bold text-teal">${selectedPrice + gym.joinFee}</span></div>
                </div>
                <div className="mt-4 space-y-2">
                  {['Cancel anytime','Full gym access from day one','Digital membership card'].map(b => (
                    <div key={b} className="flex items-center gap-2 text-xs text-text2"><Check size={12} className="text-green"/>{b}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
    <Footer />
  </>);
}
