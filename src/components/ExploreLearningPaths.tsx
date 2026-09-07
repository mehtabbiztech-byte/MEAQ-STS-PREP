import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LEARNING_PATHS } from '../data/learnerPaths';

export const ExploreLearningPaths: React.FC = () => {
  const { setTab, setSelectedExamId, updateTargetExam } = useApp();
  const [active, setActive] = useState(LEARNING_PATHS[0].id);
  const path = LEARNING_PATHS.find(item => item.id === active)!;
  const examIds: Record<string, string> = { CSS: 'css', PMS: 'pms', SPSC: 'spsc-cce', PPSC: 'ppsc', KPPSC: 'kppsc', BPSC: 'bpsc', STS: 'sts', NTS: 'nts', ETEA: 'etea' };

  const choose = (option: string) => {
    updateTargetExam(`${path.label}: ${option}`);
    if (examIds[option]) { setSelectedExamId(examIds[option]); setTab('exams'); }
    else setTab(path.id === 'jobs' ? 'jobs' : 'mcqs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="explore-paths-title">
      <div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">One platform, every learner</p><h2 id="explore-paths-title" className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">Explore exams by your journey</h2><p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">From Class 1 foundations to Pakistan’s most competitive examinations.</p></div>
      <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
        {LEARNING_PATHS.map(item => <button key={item.id} onClick={() => setActive(item.id)} className={`min-w-max rounded-2xl border px-4 py-3 text-left ${active === item.id ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm dark:bg-emerald-950/50 dark:text-emerald-200' : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'}`}><span className="mr-2 text-lg">{item.icon}</span><span className="text-sm font-bold">{item.label}</span><span className="ml-2 hidden text-xs opacity-70 sm:inline">{item.subtitle}</span></button>)}
      </div>
      <div className={`mt-3 overflow-hidden rounded-3xl bg-gradient-to-br ${path.accent} p-[1px] shadow-lg`}>
        <div className="rounded-[23px] bg-white/95 p-6 dark:bg-slate-900/95 sm:p-8"><div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"><div><span className="text-4xl">{path.icon}</span><h3 className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">{path.label} Preparation</h3><p className="text-sm text-slate-500">{path.subtitle}</p></div><div className="grid flex-1 gap-2 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-3">{path.options.map(option => <button key={option} onClick={() => choose(option)} className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-left text-sm font-semibold text-slate-700 hover:border-emerald-400 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />{option}</span><ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-emerald-600" /></button>)}</div></div></div>
      </div>
    </section>
  );
};
