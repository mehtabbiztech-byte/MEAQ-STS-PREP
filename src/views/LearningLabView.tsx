import React, { useMemo, useState } from 'react';
import { BrainCircuit, CalendarClock, Languages, MessageCircleQuestion, ShieldCheck, Sparkles, Swords, Target, ThumbsUp, Users } from 'lucide-react';
import { MCQS_DATA } from '../data/mcqsData';
import { analyseAnswerHabits, dueCards, scheduleReview, SrsCard, RecallGrade } from '../lib/adaptiveLearning';

type Language = 'English' | 'Urdu' | 'Sindhi';
type Circle = { id: string; name: string; members: number; assigned: number };

const STORAGE_KEY = 'matb_learning_engine_v1';
const CIRCLES_KEY = 'matb_study_circles_v1';

const loadCards = (): SrsCard[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* use starter cards */ }
  const yesterday = new Date(Date.now() - 86_400_000).toISOString();
  return MCQS_DATA.slice(0, 8).map((mcq, index) => ({ questionId: mcq.id, topic: mcq.subtopic || mcq.category, repetitions: index % 3, intervalDays: index ? 3 : 1, easeFactor: 2.5, dueAt: yesterday, lastGrade: 3 }));
};

const sampleEvents = [
  { questionId: '1', topic: 'Prepositions', firstAnswer: 2, finalAnswer: 1, correctAnswer: 2, timeSpentSeconds: 18, changedAnswer: true },
  { questionId: '2', topic: 'Reading Comprehension', firstAnswer: 0, finalAnswer: 0, correctAnswer: 1, timeSpentSeconds: 9, changedAnswer: false },
  { questionId: '3', topic: 'Word Problems', firstAnswer: 3, finalAnswer: 3, correctAnswer: 3, timeSpentSeconds: 84, changedAnswer: false },
];

const loadAnswerEvents = () => {
  try {
    const saved = localStorage.getItem('matb_answer_events_v1');
    if (saved) return JSON.parse(saved);
  } catch { /* use preview events */ }
  return sampleEvents;
};

const tutorLead: Record<Language, string> = {
  English: 'Let us solve it step by step. First identify the tested fact or rule.',
  Urdu: 'آئیے اسے مرحلہ وار حل کریں۔ پہلے سوال میں آزمائے گئے اصول یا حقیقت کو پہچانیں۔',
  Sindhi: 'اچو ته هن کي قدم بہ قدم حل ڪريون۔ پهرين سوال ۾ پڇيل اصول يا حقيقت سڃاڻون۔',
};

export const LearningLabView: React.FC = () => {
  const [cards, setCards] = useState<SrsCard[]>(loadCards);
  const [language, setLanguage] = useState<Language>('English');
  const [tutorOpen, setTutorOpen] = useState(false);
  const [battle, setBattle] = useState({ active: false, seconds: 60, you: 0, opponent: 0 });
  const [circleName, setCircleName] = useState('');
  const [circles, setCircles] = useState<Circle[]>(() => {
    try { return JSON.parse(localStorage.getItem(CIRCLES_KEY) || '[]'); } catch { return []; }
  });
  const [votes, setVotes] = useState(47);
  const reviews = dueCards(cards);
  const insights = useMemo(() => analyseAnswerHabits(loadAnswerEvents()), []);
  const tutorQuestion = MCQS_DATA[0];

  const reviewCard = (questionId: string, grade: RecallGrade) => {
    const next = cards.map((card) => card.questionId === questionId ? scheduleReview(card, grade) : card);
    setCards(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const createCircle = () => {
    const name = circleName.trim();
    if (!name) return;
    const next = [...circles, { id: `circle-${Date.now()}`, name, members: 1, assigned: 0 }];
    setCircles(next);
    setCircleName('');
    localStorage.setItem(CIRCLES_KEY, JSON.stringify(next));
  };

  const startBattle = () => {
    setBattle({ active: true, seconds: 60, you: 0, opponent: 0 });
    let remaining = 60;
    const timer = window.setInterval(() => {
      remaining -= 1;
      setBattle((current) => ({ ...current, seconds: remaining, opponent: remaining % 13 === 0 ? Math.min(5, current.opponent + 1) : current.opponent }));
      if (remaining <= 0) window.clearInterval(timer);
    }, 1000);
  };

  const answerBattle = () => setBattle((current) => ({ ...current, you: Math.min(5, current.you + 1) }));

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-3xl border border-indigo-400/30 bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-950 p-7 text-white shadow-xl sm:p-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-3 py-1 text-xs font-bold text-cyan-200"><Sparkles className="h-4 w-4" /> Adaptive AI & Social Learning</div>
            <h1 className="font-display text-3xl font-black sm:text-5xl">Your Cognitive Learning Lab</h1>
            <p className="mt-3 text-sm leading-6 text-indigo-100 sm:text-base">Personal review timing, multilingual reasoning, exam-habit diagnostics, live challenges, private cohorts, and verified community memory aids.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-2xl bg-white/10 p-3"><strong className="block text-2xl text-cyan-300">{reviews.length}</strong>Due reviews</div>
            <div className="rounded-2xl bg-white/10 p-3"><strong className="block text-2xl text-amber-300">74%</strong>Retention</div>
            <div className="rounded-2xl bg-white/10 p-3"><strong className="block text-2xl text-emerald-300">3</strong>Insights</div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5 flex items-start justify-between gap-3"><div><h2 className="flex items-center gap-2 text-xl font-black"><CalendarClock className="text-indigo-600" /> Smart Review Queue</h2><p className="mt-1 text-xs text-slate-500">SM-2 schedules each concept at its optimal recall interval.</p></div><span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">{reviews.length} due</span></div>
          <div className="space-y-3">
            {reviews.slice(0, 4).map((card) => <div key={card.questionId} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700"><div className="flex items-center justify-between gap-3"><div><p className="font-bold">{card.topic}</p><p className="text-xs text-slate-500">Interval {card.intervalDays}d · Ease {card.easeFactor.toFixed(2)}</p></div><div className="flex gap-1"><button onClick={() => reviewCard(card.questionId, 2)} className="rounded-lg bg-rose-100 px-2.5 py-1.5 text-xs font-bold text-rose-700">Forgot</button><button onClick={() => reviewCard(card.questionId, 4)} className="rounded-lg bg-emerald-600 px-2.5 py-1.5 text-xs font-bold text-white">Recalled</button></div></div></div>)}
            {!reviews.length && <div className="rounded-2xl bg-emerald-50 p-5 text-sm font-semibold text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">Review complete. The engine will resurface concepts when they become due.</div>}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="flex items-center gap-2 text-xl font-black"><BrainCircuit className="text-amber-500" /> Cognitive Bias Detector</h2><p className="mt-1 text-xs text-slate-500">Finds answer changes, rushing, and time-drain behaviour.</p>
          <div className="mt-5 space-y-3">{insights.map((insight) => <div key={insight.id} className={`rounded-2xl border p-4 ${insight.severity === 'risk' ? 'border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/30' : insight.severity === 'watch' ? 'border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30' : 'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30'}`}><p className="font-bold">{insight.title}</p><p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">{insight.detail}</p></div>)}</div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="flex items-center gap-2 text-xl font-black"><MessageCircleQuestion className="text-emerald-600" /> Socratic Tutor</h2><p className="mt-1 text-xs text-slate-500">Step-by-step explanations using reviewed MCQ content.</p></div><div className="flex gap-1">{(['English','Urdu','Sindhi'] as Language[]).map((item) => <button key={item} onClick={() => setLanguage(item)} className={`rounded-lg px-2.5 py-1.5 text-xs font-bold ${language === item ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>{item}</button>)}</div></div>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"><p className="text-sm font-bold">{tutorQuestion.question}</p>{tutorOpen ? <div className="mt-4 space-y-2 text-sm"><p className="font-semibold text-emerald-700 dark:text-emerald-300">{tutorLead[language]}</p><p>{tutorQuestion.explanation}</p><p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200"><strong>Distractor check:</strong> Compare every option with the exact rule; similar wording is often the trap.</p></div> : <button onClick={() => setTutorOpen(true)} className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white"><Languages className="h-4 w-4" /> Explain why</button>}</div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="flex items-center gap-2 text-xl font-black"><Swords className="text-rose-500" /> 1v1 Rapid-Fire Battle</h2><p className="mt-1 text-xs text-slate-500">60 seconds · 5 questions · practice matchmaking preview</p>
          <div className="mt-5 rounded-2xl bg-gradient-to-r from-rose-600 to-violet-700 p-5 text-white"><div className="flex items-center justify-between text-center"><div><strong className="block text-3xl">{battle.you}</strong>You</div><div><strong className="block font-mono text-3xl">00:{String(battle.seconds).padStart(2,'0')}</strong>Rapid Fire</div><div><strong className="block text-3xl">{battle.opponent}</strong>Opponent</div></div>{battle.active && battle.seconds > 0 ? <button onClick={answerBattle} disabled={battle.you >= 5} className="mt-5 w-full rounded-xl bg-white py-3 font-black text-violet-800 disabled:opacity-60">Lock correct answer +1</button> : <button onClick={startBattle} className="mt-5 w-full rounded-xl bg-white py-3 font-black text-violet-800">Find practice opponent</button>}</div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="flex items-center gap-2 text-xl font-black"><Users className="text-sky-600" /> Study Circles</h2><p className="mt-1 text-xs text-slate-500">Private cohorts for teachers, academies, and study partners.</p>
          <div className="mt-4 flex gap-2"><input value={circleName} onChange={(event) => setCircleName(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && createCircle()} placeholder="e.g. Sukkur STS Batch" className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm dark:border-slate-700"/><button onClick={createCircle} className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white">Create</button></div>
          <div className="mt-4 space-y-2">{circles.length ? circles.map((circle) => <div key={circle.id} className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-800"><div><p className="text-sm font-bold">{circle.name}</p><p className="text-xs text-slate-500">{circle.members} member · {circle.assigned} assignments</p></div><button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold dark:border-slate-700">Dashboard</button></div>) : <p className="rounded-xl border border-dashed border-slate-300 p-4 text-center text-xs text-slate-500 dark:border-slate-700">Create your first private study circle.</p>}</div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="flex items-center gap-2 text-xl font-black"><Target className="text-fuchsia-600" /> Verified Mnemonics</h2><p className="mt-1 text-xs text-slate-500">Community memory tricks with editorial verification.</p>
          <div className="mt-5 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-5 dark:border-fuchsia-900 dark:bg-fuchsia-950/30"><div className="flex items-center justify-between"><span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black text-emerald-700"><ShieldCheck className="mr-1 inline h-3 w-3" /> VERIFIED TOP SCORER</span><span className="text-xs text-slate-500">Pakistan Affairs</span></div><p className="mt-3 font-bold">“Lahore Leads, Karachi Keeps, Islamabad Inspires”</p><p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">Use a short location-linked phrase to recall the sequence, then verify the underlying dates in the official note.</p><button onClick={() => setVotes((value) => value + 1)} className="mt-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-bold text-fuchsia-700 shadow-sm dark:bg-slate-900"><ThumbsUp className="h-4 w-4" /> Helpful · {votes}</button></div>
        </section>
      </div>
    </div>
  );
};
