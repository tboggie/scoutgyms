import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (<>
    <Navbar />
    <main className="pt-16 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="font-[var(--font-display)] text-[120px] font-extrabold text-teal/20 leading-none mb-2">404</div>
        <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-2">Page not found</h1>
        <p className="text-text2 mb-8">The page you are looking for does not exist or has been moved.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="px-6 py-3 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal-dark transition-colors">Go home</Link>
          <Link href="/search" className="px-6 py-3 rounded-xl border border-border text-text2 font-semibold text-sm hover:border-teal transition-colors">Search gyms</Link>
        </div>
      </div>
    </main>
    <Footer />
  </>);
}
