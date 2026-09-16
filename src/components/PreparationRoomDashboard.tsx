import React, { useEffect, useMemo, useState } from 'react';
import { Bell, BookOpenCheck, CalendarClock, Check, Circle, ClipboardList, ExternalLink, Flame, History, Target, Trophy } from 'lucide-react';
import { getPreparationRoom } from '../data/preparationRoomsData';

const palettes: Record<string, { border: string; soft: string; text: string; bar: string; button: string }> = {
  emerald: { border: 'border-emerald-200 dark:border-emerald-800', soft: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-300', bar: 'bg-emerald-500', button: 'bg-emerald-700 hover:bg-emerald-800' },
  sky: { border: 'border-sky-200 dark:border-sky-800', soft: 'bg-sky-50 dark:bg-sky-950/30', text: 'text-sky-700 dark:text-sky-300', bar: 'bg-sky-500', button: 'bg-sky-700 hover:bg-sky-800' },
  violet: { border: 'border-violet-200 dark:border-violet-800', soft: 'bg-violet-50 dark:bg-violet-950/30', text: 'text-violet-700 dark:text-violet-300', bar: 'bg-violet-500', button: 'bg-violet-700 hover:bg-violet-800' },
  amber: { border: 'border-amber-200 dark:border-amber-800', soft: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-700 dark:text-amber-300', bar: 'bg-amber-500', button: 'bg-amber-600 hover:bg-amber-700' },
  rose: { border: 'border-rose-200 dark:border-rose-800', soft: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-700 dark:text-rose-300', bar: 'bg-rose-500', button: 'bg-rose-700 hover:bg-rose-800' },
  cyan: { border: 'border-cyan-200 dark:border-cyan-800', soft: 'bg-cyan-50 dark:bg-cyan-950/30', text: 'text-cyan-700 dark:text-cyan-300', bar: 'bg-cyan-500', button: 'bg-cyan-700 hover:bg-cyan-800' },
};

const panel = 'rounded-2xl border bg-white/90 dark:bg-slate-900/90 p-5 shadow-sm';

function countdownLabel(testDate?: string) {
  if (!testDate) return 'Awaiting official schedule';
  const days = Math.ceil((new Date(testDate).getTime() - Date.now()) / 86400000);
  if (days < 0) return 'The listed test date has passed';
  if (days === 0) return 'Test day';
  return `${days} day${days === 1 ? '' : 's'} remaining`;
}

export const PreparationRoomDashboard: React.FC<{
  examId: string;
  onOpenPapers: () => void;
  onStartMock: () => void;
}> = ({ examId, onOpenPapers, onStartMock }) => {
  const room = getPreparationRoom(examId);
  const storageKey = room ? `meqsa-room-progress-${room.id}` : '';
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  useEffect(() => {
    if (!storageKey) return;
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
      setCompletedTopics(Array.isArray(saved) ? saved : []);
    } catch {
      setCompletedTopics([]);
    }
  }, [storageKey]);

  const progress = useMemo(() => room ? Math.round((completedTopics.filter(topic => room.syllabusTopics.includes(topic)).length / room.syllabusTopics.length) * 100) : 0, [completedTopics, room]);
  if (!room) return null;
  const palette = palettes[room.accent] ?? palettes.emerald;

  const toggleTopic = (topic: string) => {
    const next = completedTopics.includes(topic) ? completedTopics.filter(item => item !== topic) : [...completedTopics, topic];
    setCompletedTopics(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  };

  return <section className="space-y-5" aria-label={room.title}>
    <div className={`${panel} ${palette.border} overflow-hidden relative`}>
      <div className={`absolute inset-x-0 top-0 h-1 ${palette.bar}`} />
      <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-5">
        <div><p className={`text-xs font-black uppercase tracking-widest ${palette.text}`}>Your dedicated preparation room</p><h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{room.title}</h3><p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{room.subtitle}</p></div>
        <div className={`rounded-2xl px-5 py-4 min-w-64 ${palette.soft} ${palette.border} border`}><div className="flex items-center gap-2 font-bold"><CalendarClock size={18} className={palette.text}/> Test countdown</div><p className="font-black mt-2 text-slate-900 dark:text-white">{countdownLabel(room.testDate)}</p><p className="text-xs text-slate-500 mt-1">Only confirmed official dates are displayed.</p></div>
      </div>
      <div className="mt-6"><div className="flex justify-between text-sm font-bold"><span>Topic completion</span><span>{progress}%</span></div><div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden mt-2"><div className={`h-full rounded-full transition-all ${palette.bar}`} style={{ width: `${progress}%` }}/></div><p className="text-xs text-slate-500 mt-2">{completedTopics.filter(topic => room.syllabusTopics.includes(topic)).length} of {room.syllabusTopics.length} syllabus areas marked complete on this device.</p></div>
      <div className="flex flex-wrap gap-3 mt-5"><a href={room.syllabusUrl} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-white font-bold ${palette.button}`}><BookOpenCheck size={18}/>Official syllabus <ExternalLink size={15}/></a><button onClick={onStartMock} className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 text-white font-bold"><Trophy size={18}/>Full mock test</button></div>
    </div>

    <div className="grid xl:grid-cols-2 gap-5">
      <div className={`${panel} ${palette.border}`}><div className="flex items-center gap-2"><Target className={palette.text}/><h4 className="text-lg font-black">Official syllabus progress</h4></div><div className="grid sm:grid-cols-2 gap-2 mt-4">{room.syllabusTopics.map(topic => { const done = completedTopics.includes(topic); return <button key={topic} onClick={() => toggleTopic(topic)} aria-pressed={done} className={`flex items-start gap-2 rounded-xl border p-3 text-left text-sm font-semibold transition ${done ? `${palette.soft} ${palette.border}` : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{done ? <Check size={18} className={palette.text}/> : <Circle size={18} className="text-slate-400"/>}<span>{topic}</span></button>; })}</div></div>
      <div className={`${panel} ${palette.border}`}><div className="flex items-center gap-2"><ClipboardList className={palette.text}/><h4 className="text-lg font-black">Recommended daily plan</h4></div><ol className="space-y-3 mt-4">{room.dailyPlan.map((task, index) => <li key={task.label} className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-800 p-3"><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-white font-black ${palette.bar}`}>{index + 1}</span><span className="flex-1 font-semibold text-sm">{task.label}</span><span className="text-xs text-slate-500">{task.minutes} min</span></li>)}</ol><p className="flex items-center gap-2 text-sm font-bold mt-4 text-orange-600 dark:text-orange-300"><Flame size={17}/>Total: {room.dailyPlan.reduce((sum, task) => sum + task.minutes, 0)} focused minutes</p></div>
    </div>

    <div className="grid xl:grid-cols-2 gap-5">
      <div className={`${panel} ${palette.border}`}><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2"><History className={palette.text}/><h4 className="text-lg font-black">Past papers by year</h4></div>{room.pastPaperYears.length > 0 && <button onClick={onOpenPapers} className={`text-sm font-bold ${palette.text}`}>View all →</button>}</div>{room.pastPaperYears.length ? <div className="flex flex-wrap gap-2 mt-4">{room.pastPaperYears.map(year => <button key={year} onClick={onOpenPapers} className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800">{year}</button>)}</div> : <p className="text-sm text-slate-500 mt-4">Primary learning uses class exercises, worksheets and progress checks instead of competitive-exam papers.</p>}</div>
      <div className={`${panel} ${palette.border}`}><div className="flex items-center gap-2"><Flame className={palette.text}/><h4 className="text-lg font-black">Frequently tested topics</h4></div><div className="flex flex-wrap gap-2 mt-4">{room.repeatedTopics.map(topic => <span key={topic} className={`rounded-full px-3 py-2 text-sm font-semibold ${palette.soft} ${palette.text}`}>{topic}</span>)}</div><p className="text-xs text-slate-500 mt-4">Frequency guidance is editorial. It is not a prediction of future questions.</p></div>
    </div>

    <div className={`${panel} ${palette.border}`}><div className="flex items-center gap-2"><Bell className={palette.text}/><h4 className="text-lg font-black">Official announcements & references</h4></div><div className="grid md:grid-cols-2 gap-3 mt-4">{room.announcements.map(item => <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400"><span className={`text-xs font-black uppercase ${palette.text}`}>{item.type}</span><span className="block font-bold mt-1">{item.title}</span><span className="block text-xs text-slate-500 mt-2">Source checked {item.checkedOn} · {room.officialName} <ExternalLink size={12} className="inline"/></span></a>)}</div></div>
  </section>;
};
