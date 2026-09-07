import React from 'react';
import { ArrowRight, BookOpen, Flame, RefreshCw, Target, Trophy } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getLearnerStage } from '../data/learnerPaths';

const dashboards = {
  kids: { title: "Today's Learning", progress: 58, tasks: [['Mathematics', '10 questions', 62], ['English', '1 lesson', 48], ['General Knowledge', '10 questions', 70]] },
  school: { title: 'Your Board Preparation', progress: 64, tasks: [['Mathematics', 'Chapter practice', 68], ['Science', '15 questions', 59], ['English', 'Grammar revision', 72]] },
  college: { title: 'Your College Preparation', progress: 61, tasks: [['Core Subjects', '20 questions', 65], ['Entry Test', 'Timed practice', 56], ['English', 'Vocabulary review', 73]] },
  university: { title: 'Your University Goals', progress: 63, tasks: [['University Exams', 'Continue revision', 69], ['Entry Tests', 'Practice set', 57], ['Scholarships', 'Review opportunities', 48]] },
  jobs: { title: 'Your Job-Test Preparation', progress: 72, tasks: [['English', '10 weak questions', 74], ['Mathematics', '10 weak questions', 66], ['General Knowledge', '5 current topics', 71]] },
  competitive: { title: 'Your Competitive Preparation', progress: 67, tasks: [['English', 'Precis & grammar', 74], ['Current Affairs', 'Daily review', 61], ['Pakistan Affairs', 'Past questions', 78], ['General Science', 'Weak topics', 53]] },
  general: { title: 'Your Skills Progress', progress: 60, tasks: [['IQ & Reasoning', '10 questions', 58], ['English', 'Vocabulary', 66], ['General Knowledge', 'Daily challenge', 63]] },
};

export const AdaptiveDashboard: React.FC = () => {
  const { userProfile, setTab, setAuthModalOpen } = useApp();
  const stage = getLearnerStage(userProfile.targetExam);
  const dashboard = dashboards[stage];
  const firstName = userProfile.name && userProfile.name !== 'Aspirant' ? userProfile.name.split(' ')[0] : 'Learner';

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20" aria-labelledby="personal-dashboard-title">
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95">
        <div className="grid lg:grid-cols-[1.15fr_2fr]">
          <div className="bg-gradient-to-br from-emerald-700 via-teal-700 to-slate-900 p-6 sm:p-8 text-white">
            <p className="text-sm text-emerald-100">👋 Welcome back, {firstName}!</p>
            <h2 id="personal-dashboard-title" className="mt-1 text-2xl font-extrabold font-display">{dashboard.title}</h2>
            <p className="mt-2 text-sm text-emerald-100/90">Focused on {userProfile.targetExam}</p>
            <div className="mt-6 flex items-end justify-between">
              <div><span className="text-4xl font-black">{dashboard.progress}%</span><p className="text-xs text-emerald-100">Overall progress</p></div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold"><Flame className="h-4 w-4 text-amber-300 fill-amber-300" />{userProfile.streakDays} day streak</div>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/20"><div className="h-full rounded-full bg-gradient-to-r from-amber-300 to-emerald-300" style={{ width: `${dashboard.progress}%` }} /></div>
            <button onClick={() => setAuthModalOpen(true)} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-white/85 hover:text-white"><RefreshCw className="h-3.5 w-3.5" />Change learning goal</button>
          </div>

          <div className="p-5 sm:p-7">
            <div className="flex items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-emerald-600">Recommended today</p><h3 className="font-bold text-slate-900 dark:text-white">Continue where you need it most</h3></div><Trophy className="h-7 w-7 text-amber-500" /></div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {dashboard.tasks.map(([subject, action, progress]) => (
                <button key={subject} onClick={() => setTab('mcqs')} className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-left hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-emerald-700">
                  <div className="flex items-start justify-between"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-emerald-600 shadow-sm dark:bg-slate-900"><BookOpen className="h-4.5 w-4.5" /></span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-emerald-600" /></div>
                  <p className="mt-3 text-sm font-bold text-slate-900 dark:text-white">{subject}</p><p className="text-xs text-slate-500 dark:text-slate-400">{action}</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${progress}%` }} /></div>
                </button>
              ))}
            </div>
            <button onClick={() => setTab('quiz')} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500"><Target className="h-4 w-4" />Practice 25 weak questions today</button>
          </div>
        </div>
      </div>
    </section>
  );
};
