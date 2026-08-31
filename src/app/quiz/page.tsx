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

function scoreGym(gym: typeof MOCK_GYMS[0], answers: string[]): number {
  let score = 0;
  // Goal matching
  if (answers[0] === 'Build muscle' && gym.amenities.some(a => a.includes('Free weights') || a.includes('Powerlifting'))) score += 3;
  if (answers[0] === 'Lose weight' && gym.classCount >= 10) score += 3;
  if (answers[0] === 'General fitness') score += 2;
  if (answers[0] === 'Train for a sport' && gym.classCount >= 15) score += 3;

  // Budget
  if (answers[1] === 'Under $25' && gym.monthlyPrice <= 25) score += 4;
  else if (answers[1] === '$25-40' && gym.monthlyPrice >= 25 && gym.monthlyPrice <= 40) score += 4;
  else if (answers[1] === '$40-60' && gym.monthlyPrice >= 40 && gym.monthlyPrice <= 60) score += 4;
  else if (answers[1] === '$60+' && gym.monthlyPrice >= 60) score += 4;
  // Partial match for close prices
  if (answers[1] === 'Under $25' && gym.monthlyPrice <= 35) score += 1;
  if (answers[1] === '$25-40' && gym.monthlyPrice <= 45) score += 1;

  // Classes preference
  if (answers[2] === 'Group classes' && gym.classCount >= 15) score += 3;
  if (answers[2] === 'Solo workouts' && gym.amenities.some(a => a.includes('Free weights'))) score += 2;
  if (answers[2] === 'Mix of both') score += 1;

  // 24/7
  if (answers[3] === 'Essential' && gym.is24hr) score += 4;
  if (answers[3] === 'Essential' && !gym.is24hr) score -= 3;
  if (answers[3] === 'Nice to have' && gym.is24hr) score += 1;

  // Amenities
  if (answers[4] === 'Pool' && gym.hasPool) score += 4;
  if (answers[4] === 'Pool' && !gym.hasPool) score -= 2;
  if (answers[4] === 'Sauna' && gym.hasSauna) score += 4;
  if (answers[4] === 'Sauna' && !gym.hasSauna) score -= 2;
  if (answers[4] === 'Free parking' && gym.parking) score += 3;
  if (answers[4] === 'Free parking' && !gym.parking) score -= 2;

  // Bonus for good ratings and no contract
  score += gym.rating >= 4.5 ? 2 : gym.rating >= 4.0 ? 1 : 0;
  if (gym.contractLength === 'None') score += 1;
  if (gym.joinFee === 0) score += 1;

  return score;
}

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const done = step >= questions.length;

  const pick = (opt: string) => { setAnswers([...answers, opt]); setStep(step + 1); };

  const topGyms = done ? MOCK_GYMS
    .map(g => ({ gym: g, score: scoreGym(g, answers) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5) : [];

  return (<>
    <Navbar />
    <main className="pt-16 min-h-screen">
      <div className="max-w-[600px] mx-auto px-6 py-16">
        {!done ? (<>
          <p className="text-[13px] font-semibold text-teal uppercase tracking-[1.5px] mb-3">Question {step+1} of {questions.length}</p>
          <div className="w-full bg-border rounded-full h-1.5 mb-8"><div className="bg-teal h-1.5 rounded-full transition-all duration-500" style={{width:`${((step+1)/questions.length)*100}%`}}/></div>
          <h1 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight mb-8">{questions[step].q}</h1>
          <div className="flex flex-col gap-3">
            {questions[step].opts.map(o=>(
              <button key={o} onClick={()=>pick(o)} className="text-left bg-card border border-border rounded-xl px-6 py-4 text-[15px] font-medium hover:border-teal hover:bg-teal-light transition-all">{o}</button>
            ))}
          </div>
          {step > 0 && <button onClick={() => { setStep(step-1); setAnswers(answers.slice(0,-1)); }} className="mt-4 text-sm text-text3 hover:text-teal transition-colors">Back to previous question</button>}
        </>) : (<>
          <div className="text-center mb-8">
            <h1 className="font-[var(--font-display)] text-3xl font-bold tracking-tight mb-2">Your top matches</h1>
            <p className="text-text2">Based on your answers, here are the best gyms for you.</p>
          </div>
          <div className="space-y-4">
            {topGyms.map(({gym: g, score},i)=>(
              <div key={g.id} className="bg-card rounded-2xl border border-border p-5 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-[var(--font-display)] font-bold text-white ${i===0?'bg-teal':i===1?'bg-purple':i===2?'bg-amber':'bg-text3'}`}>{i+1}</div>
                <img src={`/gym-photos/u${String(parseInt(g.id)).padStart(3,'0')}.jpg`} alt={g.name} className="w-14 h-14 rounded-lg object-cover hidden sm:block"/>
                <div className="flex-1 min-w-0">
                  <Link href={`/gym/${g.slug}`} className="text-lg font-semibold hover:text-teal transition-colors">{g.name}</Link>
                  <p className="text-sm text-text3 truncate">{g.address.split(',').slice(-2).join(',').trim()} · ${g.monthlyPrice}/mo · {g.rating} stars</p>
                </div>
                <Link href={`/gym/${g.slug}/book`} className="px-4 py-2 bg-teal text-white rounded-lg text-sm font-semibold hover:bg-teal-dark transition-colors hidden sm:block">Book</Link>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={()=>{setStep(0);setAnswers([])}} className="flex-1 text-center border border-border text-text2 py-3 rounded-xl font-semibold text-sm hover:border-teal transition-colors">Retake quiz</button>
            <Link href="/search" className="flex-1 text-center bg-teal text-white py-3 rounded-xl font-semibold text-sm hover:bg-teal-dark transition-colors">Browse all gyms</Link>
          </div>
        </>)}
      </div>
    </main>
    <Footer />
  </>);
}
