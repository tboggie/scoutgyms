'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { MOCK_GYMS } from '@/lib/mock-data';

const questions = [
  {q:'What is your primary fitness goal?',opts:['Build muscle','Lose weight','General fitness','Train for a sport']},
  {q:'What is your monthly budget?',opts:['Under $25','$25-40','$40-60','$60+']},
  {q:'Do you prefer group classes or solo workouts?',opts:['Group classes','Solo workouts','Mix of both','No preference']},
  {q:'How important is 24/7 access?',opts:['Essential','Nice to have','Not important']},
  {q:'Any must-have amenities?',opts:['Pool','Sauna','Free parking','None of these']},
];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const done = step >= questions.length;

  const pick = (opt: string) => { setAnswers([...answers, opt]); setStep(step + 1); };

  return (<>
    <Navbar />
    <main className="pt-16 min-h-screen">
      <div className="max-w-[600px] mx-auto px-6 py-16">
        {!done ? (<>
          <p className="text-[13px] font-semibold text-teal uppercase tracking-[1.5px] mb-3">Question {step+1} of {questions.length}</p>
          <div className="w-full bg-border rounded-full h-1.5 mb-8"><div className="bg-teal h-1.5 rounded-full transition-all" style={{width:`${((step+1)/questions.length)*100}%`}}/></div>
          <h1 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight mb-8">{questions[step].q}</h1>
          <div className="flex flex-col gap-3">
            {questions[step].opts.map(o=>(
              <button key={o} onClick={()=>pick(o)} className="text-left bg-card border border-border rounded-xl px-6 py-4 text-[15px] font-medium hover:border-teal hover:bg-teal-light transition-all">{o}</button>
            ))}
          </div>
        </>) : (<>
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🎯</div>
            <h1 className="font-[var(--font-display)] text-3xl font-bold tracking-tight mb-2">Your top matches</h1>
            <p className="text-text2">Based on your answers, here are the best gyms for you.</p>
          </div>
          <div className="space-y-4">
            {MOCK_GYMS.slice(0,3).map((g,i)=>(
              <div key={g.id} className="bg-card rounded-2xl border border-border p-5 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-[var(--font-display)] font-bold text-white ${i===0?'bg-teal':i===1?'bg-purple':'bg-amber'}`}>{i+1}</div>
                <div className="flex-1">
                  <Link href={`/gym/${g.slug}`} className="text-lg font-semibold hover:text-teal">{g.name}</Link>
                  <p className="text-sm text-text3">{g.distance} miles · ⭐ {g.rating} · ${g.monthlyPrice}/mo</p>
                </div>
                <Link href={`/gym/${g.slug}`} className="text-sm text-teal font-semibold">View →</Link>
              </div>
            ))}
          </div>
          <button onClick={()=>{setStep(0);setAnswers([])}} className="mt-6 w-full text-center border border-border text-text2 py-3 rounded-xl font-semibold text-sm hover:border-teal transition-colors">Retake quiz</button>
        </>)}
      </div>
    </main>
    <Footer />
  </>);
}