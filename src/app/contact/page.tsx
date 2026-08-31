import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function ContactPage() {
  return (<><Navbar /><main className="pt-16 min-h-screen">
    <div className="max-w-[1140px] mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-[13px] font-semibold text-teal uppercase tracking-[1.5px] mb-3">Contact</p>
          <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-4">Get in touch</h1>
          <p className="text-text2 mb-8">Have a question about ScoutGyms? We typically respond within 24 hours.</p>
          <div className="space-y-6">
            <div className="flex gap-4"><div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center text-teal font-bold text-sm flex-shrink-0">@</div><div><h3 className="font-semibold text-sm">Email</h3><p className="text-sm text-text2">support@scoutgyms.com</p></div></div>
            <div className="flex gap-4"><div className="w-10 h-10 rounded-xl bg-purple-light flex items-center justify-center text-purple font-bold text-sm flex-shrink-0">B</div><div><h3 className="font-semibold text-sm">For business enquiries</h3><p className="text-sm text-text2">partnerships@scoutgyms.com</p></div></div>
            <div className="flex gap-4"><div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center text-green font-bold text-sm flex-shrink-0">P</div><div><h3 className="font-semibold text-sm">Press</h3><p className="text-sm text-text2">press@scoutgyms.com</p></div></div>
          </div>
          <div className="mt-8 p-4 rounded-xl bg-bg2 border border-border">
            <p className="text-sm font-medium mb-1">Looking for help?</p>
            <p className="text-sm text-text2">Check our <Link href="/terms" className="text-teal font-semibold">FAQ</Link> for quick answers to common questions.</p>
          </div>
        </div>
        <div>
          <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div><label className="text-sm font-medium text-text2 block mb-1.5">Name</label><input placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
              <div><label className="text-sm font-medium text-text2 block mb-1.5">Email</label><input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal"/></div>
            </div>
            <div><label className="text-sm font-medium text-text2 block mb-1.5">Subject</label>
              <select className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text2"><option>General enquiry</option><option>Corporate wellness</option><option>Gym partnership</option><option>Bug report</option><option>Press</option></select>
            </div>
            <div><label className="text-sm font-medium text-text2 block mb-1.5">Message</label><textarea rows={5} placeholder="Tell us more..." className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-text outline-none focus:border-teal resize-none"/></div>
            <button className="w-full bg-teal text-white py-3 rounded-xl font-semibold text-[15px] hover:bg-teal-dark transition-colors">Send message</button>
            <p className="text-xs text-text3 text-center">We typically reply within 24 hours on weekdays.</p>
          </div>
        </div>
      </div>
    </div>
  </main><Footer /></>);
}
