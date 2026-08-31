import DashboardShell from '@/components/layout/DashboardShell';

const searchTerms = [
  { term: '24/7 gym', searches: 234 },
  { term: 'gym with pool', searches: 189 },
  { term: 'cheap gym', searches: 156 },
  { term: 'crossfit', searches: 132 },
  { term: 'gym with sauna', searches: 98 },
  { term: 'no contract gym', searches: 87 },
  { term: 'gym classes', searches: 76 },
];

const weeklyViews = [142, 156, 178, 165, 198, 210, 189, 224];
const weeks = ['Jul 7', 'Jul 14', 'Jul 21', 'Jul 28', 'Aug 4', 'Aug 11', 'Aug 18', 'Aug 25'];

export default function PartnerAnalytics() {
  return (
    <DashboardShell variant="partners">
      <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight mb-6">Analytics</h1>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Profile views (30d)</p><p className="font-[var(--font-display)] text-3xl font-bold text-teal">1,247</p><p className="text-xs text-green mt-1">+12% vs last month</p></div>
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Search appearances</p><p className="font-[var(--font-display)] text-3xl font-bold text-purple">3,892</p><p className="text-xs text-green mt-1">+8% vs last month</p></div>
        <div className="bg-card rounded-xl border border-border p-5"><p className="text-xs text-text3 font-medium mb-1">Conversion rate</p><p className="font-[var(--font-display)] text-3xl font-bold text-green">2.2%</p><p className="text-xs text-text3 mt-1">Industry avg: 1.8%</p></div>
      </div>

      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <h2 className="font-semibold mb-4">Weekly profile views</h2>
        <div className="flex items-end gap-2 h-32">
          {weeklyViews.map((v,i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[10px] text-text3 font-medium">{v}</span>
              <div className="w-full bg-teal/70 hover:bg-teal rounded-t transition-colors" style={{height:`${(v/Math.max(...weeklyViews))*100}%`}}/>
              <span className="text-[10px] text-text3">{weeks[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-semibold mb-4">What people search for near you</h2>
          {searchTerms.map(t=>(
            <div key={t.term} className="flex items-center justify-between py-2.5 border-b border-border last:border-none">
              <span className="text-sm text-text2">{t.term}</span>
              <div className="flex items-center gap-3">
                <div className="w-20 h-1.5 rounded-full bg-border overflow-hidden"><div className="h-full rounded-full bg-teal" style={{width:`${(t.searches/searchTerms[0].searches)*100}%`}}/></div>
                <span className="text-xs text-text3 w-12 text-right">{t.searches}/mo</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-semibold mb-4">Compared against</h2>
          {['FitLife 24/7','Peak Athletics','Zen Fitness','Flex Factory','Muscle Lab'].map((g,i) => (
            <div key={g} className="flex items-center justify-between py-2.5 border-b border-border last:border-none">
              <span className="text-sm text-text2">{g}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text3">{[42,38,27,19,14][i]} times</span>
                <span className={`text-xs font-semibold ${[52,45,61,48,55][i] > 50 ? 'text-green' : 'text-red'}`}>{[52,45,61,48,55][i]}% win rate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
