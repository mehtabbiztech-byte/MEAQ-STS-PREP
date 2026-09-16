import React, { useMemo } from 'react';
import { Award, BarChart3, Clock, Target } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const RankingsView: React.FC = () => {
  const { userProfile } = useApp();
  const attempts = userProfile.quizHistory || [];
  const summary = useMemo(() => {
    const answered = attempts.reduce((sum, item) => sum + item.totalQuestions, 0);
    const score = attempts.reduce((sum, item) => sum + item.score, 0);
    const seconds = attempts.reduce((sum, item) => sum + item.timeSpentSeconds, 0);
    return { answered, seconds, accuracy: answered ? Math.round((score / answered) * 100) : 0 };
  }, [attempts]);

  return <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
    <header className="rounded-3xl bg-slate-950 text-white p-7 sm:p-10">
      <p className="text-emerald-400 text-xs font-black uppercase tracking-widest">Personal progress</p>
      <h1 className="text-3xl sm:text-5xl font-black mt-2">Your Practice Performance</h1>
      <p className="text-slate-300 mt-3 max-w-3xl">These figures come only from your saved MEQSA practice attempts. MEQSA does not claim national ranks or percentiles without a verified candidate population.</p>
    </header>
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        ['Attempts', attempts.length, Award],
        ['Questions', summary.answered, Target],
        ['Accuracy', `${summary.accuracy}%`, BarChart3],
        ['Practice time', `${Math.round(summary.seconds / 60)} min`, Clock],
      ].map(([label, value, Icon]) => <article key={String(label)} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5"><Icon className="text-emerald-600"/><p className="text-sm text-slate-500 mt-4">{String(label)}</p><p className="text-3xl font-black mt-1">{String(value)}</p></article>)}
    </section>
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
      <h2 className="text-xl font-black">Recent attempts</h2>
      {!attempts.length ? <p className="text-slate-500 mt-3">Complete a quiz to start your personal progress history.</p> : <div className="mt-4 divide-y divide-slate-200 dark:divide-slate-800">{attempts.slice(0, 20).map(item => <article key={item.id} className="py-4 flex flex-wrap justify-between gap-3"><div><p className="font-bold">{item.title}</p><p className="text-sm text-slate-500">{item.date}</p></div><div className="text-right"><p className="font-black">{item.score}/{item.totalQuestions}</p><p className="text-xs text-slate-500">Practice result</p></div></article>)}</div>}
    </section>
  </main>;
};
