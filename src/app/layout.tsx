import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 title: "ScoutGyms — Find, Compare & Earn",
 description: "Search any US zip code, compare gyms side by side, and earn cash when you refer friends.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en" suppressHydrationWarning>
 <body>{children}</body>
 </html>
 );
}
