'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ variant = 'consumer' }: { variant?: 'consumer' | 'business' | 'partners' }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sg-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('sg-theme', !dark ? 'dark' : 'light');
  };

  const consumerLinks = [
    { href: '/search', label: 'Find gyms' },
    { href: '/compare', label: 'Compare' },
    { href: '/quiz', label: 'Smart match' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/business', label: 'For business' },
  ];
  const businessLinks = [
    { href: '/business/how-it-works', label: 'How it works' },
    { href: '/business/pricing', label: 'Pricing' },
    { href: '/business/dashboard', label: 'Dashboard' },
    { href: '/', label: 'Consumer app' },
  ];
  const partnerLinks = [
    { href: '/partners', label: 'Overview' },
    { href: '/partners/claim', label: 'Claim listing' },
    { href: '/partners/dashboard', label: 'Dashboard' },
    { href: '/', label: 'Consumer app' },
  ];

  const links = variant === 'business' ? businessLinks : variant === 'partners' ? partnerLinks : consumerLinks;
  const ctaLabel = variant === 'business' ? 'Book a demo' : variant === 'partners' ? 'Claim your gym' : 'Get started';
  const ctaHref = variant === 'business' ? '/business/signup' : variant === 'partners' ? '/partners/claim' : '/signup';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/92 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1140px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={variant === 'business' ? '/business' : variant === 'partners' ? '/partners' : '/'} className="font-[var(--font-display)] font-extrabold text-[22px] text-teal tracking-tight">
          Scout<span className="text-text">Gyms</span>
          {variant === 'business' && <span className="ml-2 text-[11px] font-semibold bg-teal-light text-teal-dark px-2 py-0.5 rounded align-middle font-[var(--font-sans)]">for Business</span>}
          {variant === 'partners' && <span className="ml-2 text-[11px] font-semibold bg-amber-light text-amber px-2 py-0.5 rounded align-middle font-[var(--font-sans)]">Partners</span>}
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-text2 font-medium hover:text-teal transition-colors">{l.label}</Link>
          ))}
          <button onClick={toggleTheme} className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text2 hover:border-teal hover:bg-teal-light hover:text-teal transition-all">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href={ctaHref} className="bg-teal text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-teal-dark transition-colors">{ctaLabel} ↗</Link>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text2">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2"><Menu size={24} className="text-text" /></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-text2 font-medium py-2">{l.label}</Link>
          ))}
          <Link href={ctaHref} onClick={() => setOpen(false)} className="bg-teal text-white px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2">{ctaLabel}</Link>
        </div>
      )}
    </nav>
  );
}
