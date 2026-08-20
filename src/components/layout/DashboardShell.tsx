'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

type NavItem = { href: string; label: string; icon: string };

const consumerNav: NavItem[] = [
 { href: '/dashboard', label: 'Overview', icon: 'OV' },
 { href: '/dashboard/referrals', label: 'Referrals', icon: 'RF' },
 { href: '/dashboard/earnings', label: 'Earnings', icon: 'EA' },
 { href: '/dashboard/alerts', label: 'Price alerts', icon: 'AL' },
 { href: '/dashboard/settings', label: 'Settings', icon: 'ST' },
];

const corporateNav: NavItem[] = [
 { href: '/business/dashboard', label: 'Overview', icon: 'OV' },
 { href: '/business/dashboard/employees', label: 'Employees', icon: 'EM' },
 { href: '/business/dashboard/invite', label: 'Invite', icon: 'IN' },
 { href: '/business/dashboard/analytics', label: 'Analytics', icon: 'AN' },
 { href: '/business/dashboard/billing', label: 'Billing', icon: 'BI' },
 { href: '/business/dashboard/challenges', label: 'Challenges', icon: 'CH' },
 { href: '/business/dashboard/settings', label: 'Settings', icon: 'ST' },
];

const partnerNav: NavItem[] = [
 { href: '/partners/dashboard', label: 'Overview', icon: 'OV' },
 { href: '/partners/dashboard/listing', label: 'Listing', icon: 'LI' },
 { href: '/partners/dashboard/reviews', label: 'Reviews', icon: 'RV' },
 { href: '/partners/dashboard/leads', label: 'Leads', icon: 'LD' },
 { href: '/partners/dashboard/promotions', label: 'Promotions', icon: 'PR' },
 { href: '/partners/dashboard/analytics', label: 'Analytics', icon: 'AN' },
 { href: '/partners/dashboard/corporate', label: 'Corporate', icon: 'CO' },
];

export default function DashboardShell({ children, variant = 'consumer' }: { children: React.ReactNode; variant?: 'consumer' | 'business' | 'partners' }) {
 const pathname = usePathname();
 const nav = variant === 'business' ? corporateNav : variant === 'partners' ? partnerNav : consumerNav;
 const nbVariant = variant === 'business' ? 'business' : variant === 'partners' ? 'partners' : 'consumer';

 return (
 <>
 <Navbar variant={nbVariant} />
 <div className="pt-16 min-h-screen flex">
 <aside className="hidden lg:flex w-60 border-r border-border bg-card flex-col py-6 px-4 gap-1 fixed top-16 bottom-0">
 {nav.map(item => (
 <Link key={item.href} href={item.href}
 className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === item.href ? 'bg-teal-light text-teal-dark' : 'text-text2 hover:bg-bg2'}`}>
 <span className={`w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold ${pathname === item.href ? 'bg-teal text-white' : 'bg-bg2 text-text3'}`}>{item.icon}</span>{item.label}
 </Link>
 ))}
 </aside>
 <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border px-2 py-2 flex justify-around z-50">
 {nav.slice(0, 5).map(item => (
 <Link key={item.href} href={item.href}
 className={`flex flex-col items-center gap-0.5 text-[10px] font-medium px-2 py-1 rounded-lg ${pathname === item.href ? 'text-teal' : 'text-text3'}`}>
 <span className={`w-6 h-6 rounded flex items-center justify-center text-[9px] font-bold ${pathname === item.href ? 'bg-teal text-white' : 'bg-bg2 text-text3'}`}>{item.icon}</span>{item.label}
 </Link>
 ))}
 </div>
 <main className="flex-1 lg:ml-60 p-6 pb-24 lg:pb-6">{children}</main>
 </div>
 </>
 );
}
